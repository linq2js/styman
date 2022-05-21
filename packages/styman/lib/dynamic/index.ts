import type { CSSInterpolation } from "@emotion/css";
import type { FalsyValue, Style } from "../main";
import { defaultModifiers } from "./defaultModifiers";

export type DefaultModifierKey = keyof typeof defaultModifiers;

export type ColorSwatch = Partial<Record<Exclude<Shading, true>, string>>;

export type ColorScheme = { [key: string]: ColorSwatch };

export type Shading =
  | "default"
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export interface CombinableHandler<P1> {
  (param: P1, context?: VariantContext): CSSInterpolation;
  combineWith<P2>(
    pattern: RegExp,
    other: (param: P2, context: VariantContext) => CSSInterpolation
  ): CombinableHandler<P1 | P2>;
}

const combinableHandler = <P1, TProps>(
  handler: (param: P1, context: VariantContext) => CSSInterpolation,
  props?: TProps
): CombinableHandler<P1> & TProps => {
  return Object.assign(handler, {
    ...props,
    combineWith: <P2>(
      pattern: RegExp,
      otherHandler: (param: P2, context: VariantContext) => CSSInterpolation
    ) =>
      combinableHandler(
        Object.assign(
          (param: P2 | P1, context: VariantContext) =>
            pattern.test(String(param))
              ? otherHandler(param as any, context)
              : handler(param as any, context),
          {
            variants: [
              ...((handler as any).variants ?? []),
              ...((otherHandler as any).variatns ?? []),
            ],
          }
        ),
        props
      ),
  }) as any;
};

export type Rule = Style | ((param: any) => CSSInterpolation);

export interface WithModifiers {
  /**
   * create dynamic rules with specified names and modifiers
   * ```js
   * sheet({
   *  ...withModifiers('bordered', () => ({ borderWidth: 1 }))
   * });
   *
   * // generated rules:
   * bordered: { borderWidth: 1 }
   * hover_bordered: { borderWidth: 1 }
   * active_bordered: { borderWidth: 1 }
   * ... and so on
   * // please refer this link to see list of modifiers
   * // https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference
   *
   * // this means the div has borders when mouse is over or it has active status
   * <div class={styles({ hover_bordered: true, active_bordered: true })}></div>
   * ```
   */
  <TRule extends Exclude<Rule, Style> | Variants, TPrefix extends string>(
    prefix: TPrefix | TPrefix[],
    rule: TRule
  ): DynamicRule<DefaultModifierKey, TPrefix, TRule>;

  <
    TRule extends Exclude<Rule, Style> | Variants,
    TPrefix extends string,
    T1 extends string
  >(
    prefix: TPrefix | TPrefix[],
    rule: TRule,
    p1: readonly T1[]
  ): DynamicRuleWithKey<DefaultModifierKey, TPrefix, TRule, T1>;

  <
    TRule extends Exclude<Rule, Style> | Variants,
    TPrefix extends string,
    T1 extends string,
    T2 extends string
  >(
    prefix: TPrefix | TPrefix[],
    rule: TRule,
    p1: readonly T1[],
    p2: readonly T2[]
  ): DynamicRuleWithKey<DefaultModifierKey, TPrefix, TRule, `${T1}_${T2}`>;

  <
    TRule extends Exclude<Rule, Style> | Variants,
    TPrefix extends string,
    T1 extends string,
    T2 extends string,
    T3 extends string
  >(
    prefix: TPrefix | TPrefix[],
    rule: TRule,
    p1: readonly T1[],
    p2: readonly T2[],
    p3: readonly T3[]
  ): DynamicRuleWithKey<
    DefaultModifierKey,
    TPrefix,
    TRule,
    `${T1}_${T2}_${T3}`
  >;
}

export interface WithValues {
  <TGroup extends string, TValue = any>(
    group: TGroup[],
    handler: (item: any, context: VariantContext) => CSSInterpolation
  ): {
    [key in TGroup]: (value: any, context: VariantContext) => CSSInterpolation;
  };
  <TGroup extends { [key: string]: CSSInterpolation }, TValue = any>(
    group: TGroup,
    handler: (item: any, context: VariantContext) => CSSInterpolation
  ): {
    [key in keyof TGroup]: (
      value: TValue,
      context: VariantContext
    ) => CSSInterpolation;
  };
}

export type Modifiers = Record<string, string>;

export interface PresetOptions<TModifiers extends Modifiers> {
  modifiers?: TModifiers;
}

const isObject = (item: any) =>
  item && typeof item === "object" && !Array.isArray(item);

const mergeDeep = (target: any, ...sources: any[]): any => {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    Object.entries(source).forEach(([key, value]) => {
      if (isObject(source[key])) {
        if (!target[key]) target[key] = {};
        mergeDeep(target[key], value);
      } else {
        target[key] = value;
      }
    });
  }

  return mergeDeep(target, ...sources);
};

const createPreset = <TModifiers extends Modifiers = typeof defaultModifiers>({
  modifiers = defaultModifiers as any,
}: PresetOptions<TModifiers> = {}) => {
  const withValues: WithValues = (group: any, handler: Function): any => {
    if (Array.isArray(group)) {
      return group.reduce((result, item) => {
        result[item] = (_: any, context: any) => handler(item, context);
        return result;
      }, {} as Record<string, any>);
    }
    return Object.entries(group).reduce((result, [key, item]) => {
      result[key] = (_: any, context: any) => handler(item, context);
      return result;
    }, {} as Record<string, any>);
  };

  const withVariants = <TVariants extends Variants>(variants: TVariants) => {
    const handler = (
      param: VariantParam<TVariants> | VariantParam<TVariants>[],
      extra?: any
    ): any => {
      const params = Array.isArray(param) ? param : [param];
      const path = extra?.path;
      let sides: Side[] | undefined;
      let skipping = false;

      if (typeof variants["$param"] === "function") {
        return variants["$param"](
          Array.isArray(param) ? param : [param],
          createVariantContext(sides, false, path)
        );
      }

      return mergeDeep(
        {},
        ...params.map((p: any) => {
          // falsy values
          if (typeof p === "undefined" || p === false || p === null) {
            return;
          }

          if (Array.isArray(p)) {
            sides = p.filter((x) => x !== "--");
            skipping = false;
            return;
          }
          if (
            p === "L" ||
            p === "T" ||
            p === "R" ||
            p === "B" ||
            p === "X" ||
            p === "Y" ||
            p === "V" ||
            p === "H"
          ) {
            sides = [p];
            skipping = false;
            return;
          }

          if (p === "--") {
            skipping = true;
            return;
          }

          if (skipping) return;

          const context = createVariantContext(
            sides,
            variants.$sides ? true : variants.$xy ? "xy" : false,
            path
          );

          if (p in variants) {
            const rule = (variants as any)[p];
            return typeof rule === "function" ? rule(p, context) : rule;
          }
          if (p === true) return variants["$default"]?.(true, context);
          if (!isNaN(p) && typeof variants["$number"] === "function") {
            return variants["$number"]?.(parseFloat(p), context);
          }
          if (typeof p === "string" && p.includes("/")) {
            const parts = p.split("/");
            return variants["$fraction"]?.(parts.map(parseFloat), context);
          }
          return variants["$custom"]?.(String(p), context);
        })
      );
    };

    if (process.env.NODE_ENV !== "production") {
      const {
        $default,
        $number,
        $fraction,
        $param,
        $custom,
        $sides,
        $xy,
        ...otherVaritants
      } = variants as any;
      Object.assign(handler, {
        variants: [
          ...($default ? ["DEFAULT"] : []),
          ...($fraction ? ["FRACTION"] : []),
          ...($number?.variants ? $number.variants : $number ? ["NUMBER"] : []),
          ...($custom?.variants ? $custom.variants : $custom ? ["STRING"] : []),
          ...($param?.variants ? $param.variants : $param ? ["PARAM"] : []),
          ...Object.keys(otherVaritants),
        ],
      });
    }
    return combinableHandler(handler);
  };

  const withColors = <TScheme extends ColorScheme>(
    colors: TScheme,
    handler: (color: string, context: VariantContext) => CSSInterpolation
  ) =>
    combinableHandler(
      Object.assign(
        (param: ColorSchemeParam<TScheme>, context: any) => {
          const [color, shading = "default"] = (param as string).split("-") as [
            string,
            Shading | undefined
          ];
          const availColor = colors[color]?.[shading] ?? colors[color]?.[500];
          return availColor ? handler(availColor, context) : undefined;
        },
        { variants: ["COLOR"] }
      )
    );

  const withModifiers: WithModifiers = (
    prefix: string,
    rule: any,
    ...names: (readonly string[])[]
  ) => {
    const result: Record<string, any> = {};

    if (typeof rule !== "function" && typeof rule === "object") {
      rule = withVariants(rule);
    }

    const isFunction = typeof rule === "function";

    const generate = (
      path: string[],
      params: string[],
      next: (readonly string[])[],
      callback: (path: string[], params: string[]) => void
    ) => {
      if (next.length) {
        const sub = next.slice(1);
        next[0].forEach((p) => {
          generate(path.concat(p), params.concat(p), sub, callback);
        });
      } else {
        callback(path, params);
      }
    };

    (Array.isArray(prefix) ? prefix : [prefix]).forEach((prefix) => {
      generate([prefix], [], names, (path) => {
        const wrappedRule = (param: any) => {
          const processModifiers = (result: any, param: any) => {
            if (!isObject(param)) {
              return isFunction ? rule(param, { path }) : rule;
            }

            Object.entries(param).forEach(([key, value]) => {
              if (key === "$") {
                Object.assign(result, isFunction ? rule(value) : rule);
                return;
              }

              if (!(key in modifiers)) {
                throw new Error(`Invalid modifier "${key}"`);
              }

              result[modifiers[key]] = processModifiers({}, value);
            });

            return result;
          };

          return processModifiers({}, param);
        };

        wrappedRule.variants = rule.variants;

        result[path.join("_")] =
          isFunction && rule.length
            ? wrappedRule
            : () => wrappedRule(undefined);
      });
    });

    return result;
  };

  return { withValues, withColors, withVariants, withModifiers, modifiers };
};

export type MetaOptions = { variants?: any; description?: string };

export const meta = <T>(func: T, { variants }: MetaOptions): T =>
  Object.assign(func, {
    variants: (typeof variants === "function" ? variants() : variants) ?? [],
  });

const createSwatch = (
  mainColor: string,
  lighters: string[] = [],
  darkers: string[] = []
) => {
  const lighterColors = 5;
  const darkerColors = 4;
  if (!lighters.length) {
    lighters = new Array(lighterColors).fill(mainColor);
  }
  // keep last 5 if availLighters has more than 5 items
  else if (lighters.length > lighterColors) {
    lighters = lighters.slice(-lighterColors);
  } else {
    lighters = new Array(lighterColors)
      .fill(0)
      .map(
        (_, i) => lighters[Math.floor((lighters.length / lighterColors) * i)]
      );
  }

  if (!darkers.length) {
    darkers = new Array(darkerColors).fill(mainColor);
  } else if (darkers.length > darkerColors) {
    darkers = darkers.slice(0, darkerColors);
  } else {
    darkers = new Array(darkerColors)
      .fill(0)
      .map(
        (_, i) => lighters[Math.floor((lighters.length / darkerColors) * i)]
      );
  }
  return [...lighters, mainColor, ...darkers].reduce((newSwatch, color, i) => {
    newSwatch[defaultShadings[i] as Shading] = color;
    return newSwatch;
  }, {} as ColorSwatch);
};

const createVariantContext = (
  sides: Side[] | undefined,
  sideType: boolean | "xy" = false,
  path?: string[]
): VariantContext => {
  const key = path?.slice(-1)?.[0];
  // normalize sides
  if (sides) {
    sides = [
      ...sides.reduce(
        (set, s) => {
          if (sideType === "xy") {
            set.add(s);
            return set;
          }
          if (s === "H" || s === "X") {
            set.add("L");
            set.add("R");
          } else if (s === "V" || s === "Y") {
            set.add("T");
            set.add("B");
          } else if (s !== "--") {
            set.add(s);
          }
          return set;
        },
        sideType === "xy"
          ? new Set<Side>()
          : new Set<Exclude<Side, SpecialSide>>()
      ),
    ];
  }
  return {
    key,
    path,
    sides,
    withKey(keyMap, styles, noKeyStyles) {
      if (!key) return mergeDeep({}, noKeyStyles?.());
      const mappedKey = keyMap[key] ?? key;
      return mergeDeep(
        {},
        ...(Array.isArray(mappedKey) ? mappedKey : [mappedKey]).map(styles)
      );
    },
    withSides(name, styles, noSideStyles) {
      if (!sides?.length) {
        if (typeof name === "string")
          return styles(
            (name.includes("$") ? name.replace("$", "") : name) as any
          );
        return typeof noSideStyles === "function" ? noSideStyles() : undefined;
      }

      if (!name) {
        return mergeDeep({}, ...sides.map(styles));
      }

      return mergeDeep(
        {},
        ...sides.map((side) => {
          if (!side) return undefined;
          const formattedSide =
            side === "B"
              ? "Bottom"
              : side === "L"
              ? "Left"
              : side === "R"
              ? "Right"
              : "Top";
          if (typeof name === "string") {
            return styles(
              (name.includes("$")
                ? name.replace("$", formattedSide)
                : name + formattedSide) as any
            );
          }
          return styles(name?.(formattedSide, side as any) as any);
        })
      );
    },
  };
};

export interface VariantContext {
  key?: string;
  path?: string[];
  sides?: Side[];
  withSides(
    name: false,
    styles: (side: Side) => CSSInterpolation,
    noSideStyles?: () => CSSInterpolation
  ): Record<string, any>;

  withSides(
    name:
      | string
      | ((formattedSide: string, side: Exclude<Side, SpecialSide>) => string),
    styles: (name: string) => CSSInterpolation,
    noSideStyles?: () => CSSInterpolation
  ): Record<string, any>;

  withKey(
    keyMap: Record<string, string | string[]>,
    styles: (name: string) => CSSInterpolation,
    noSideStyles?: () => CSSInterpolation
  ): Record<string, any>;
}

export type Variants = {
  [key: string]: (
    value: any,
    context: VariantContext
  ) => CSSInterpolation | true;
};

export type VariantParamWithModifier<
  TModifer extends string,
  TRule extends Variants
> = {
  [key in TModifer | "$"]?:
    | VariantParam<TRule>
    | VariantParam<TRule>[]
    | VariantParamWithModifier<TModifer, TRule>;
};

export type DynamicRuleMapping<
  TModifier extends string,
  TRule
> = TRule extends Function
  ? TRule
  : TRule extends Variants
  ? (
      param:
        | VariantParam<TRule>
        | VariantParam<TRule>[]
        | VariantParamWithModifier<TModifier, TRule>
    ) => any
  : never;

export type DynamicRuleProps<
  TModifier extends string,
  TKey extends string,
  TRule
> = {
  [key in TKey]: DynamicRuleMapping<TModifier, TRule>;
};

export type DynamicRule<
  TModifier extends string,
  TPrefix extends string,
  TRule
> = DynamicRuleProps<TModifier, TPrefix, TRule>;

export type DynamicRuleWithKey<
  TModifier extends string,
  TPrefix extends string,
  TRule,
  TKey extends string
> = DynamicRuleProps<TModifier, `${TPrefix}_${TKey}`, TRule>;

export type SpecialSide = "X" | "Y" | "H" | "V" | "--";

export type Side =
  /**
   * left
   */
  | "L"
  /**
   * top
   */
  | "T"
  /**
   * right
   */
  | "R"
  /**
   * bottom
   */
  | "B"
  | SpecialSide;

export type VariantParam<TVariants extends Variants> =
  | (TVariants["$param"] extends (values: Array<infer T>) => any
      ? T
      :
          | Exclude<
              keyof TVariants,
              | "$default"
              | "$number"
              | "$custom"
              | "$fraction"
              | "$sides"
              | "$xy"
            >
          | (TVariants["$number"] extends Function
              ? number | `${number}`
              : never)
          | (TVariants["$fraction"] extends Function
              ? `${number}/${number}`
              : never)
          | (TVariants["$custom"] extends (value: infer T) => any ? T : never)
          | (TVariants["$default"] extends Function ? true : never)
          | (TVariants["$sides"] extends Function ? Side | Side[] : never)
          | (TVariants["$xy"] extends Function
              ? "X" | "Y" | ("X" | "Y")[]
              : never))
  | FalsyValue;

const defaultShadings: Shading[] = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
];

export type ColorSchemeParam<TScheme> =
  | keyof TScheme
  | `${string & keyof TScheme}-${Exclude<Shading, "default">}`;

const { withModifiers, withVariants, withColors, withValues } = createPreset();

export {
  createSwatch,
  withModifiers,
  withVariants,
  withColors,
  withValues,
  createPreset,
  defaultModifiers,
  defaultShadings,
};
