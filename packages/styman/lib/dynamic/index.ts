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
        (param: P2 | P1, context: VariantContext) =>
          pattern.test(String(param))
            ? otherHandler(param as any, context)
            : handler(param as any, context),
        props
      ),
  }) as any;
};

export type DynamicRule = Style | ((param: any) => CSSInterpolation);

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
  <
    TRule extends Exclude<DynamicRule, Style> | Variants,
    TPrefix extends string
  >(
    prefix: TPrefix,
    rule: TRule
  ): DynamicResult<DefaultModifierKey, TPrefix, TRule>;

  <
    TRule extends Exclude<DynamicRule, Style> | Variants,
    TPrefix extends string,
    T1 extends string
  >(
    prefix: TPrefix,
    rule: TRule,
    p1: readonly T1[]
  ): DynamicResultWithKey<DefaultModifierKey, TPrefix, TRule, T1>;

  <
    Rule extends Exclude<DynamicRule, Style> | Variants,
    TPrefix extends string,
    T1 extends string,
    T2 extends string
  >(
    prefix: TPrefix,
    rule: Rule,
    p1: readonly T1[],
    p2: readonly T2[]
  ): DynamicResultWithKey<DefaultModifierKey, TPrefix, Rule, `${T1}_${T2}`>;

  <
    TRule extends Exclude<DynamicRule, Style> | Variants,
    TPrefix extends string,
    T1 extends string,
    T2 extends string,
    T3 extends string
  >(
    prefix: TPrefix,
    rule: TRule,
    p1: readonly T1[],
    p2: readonly T2[],
    p3: readonly T3[]
  ): DynamicResultWithKey<
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

const mergeStyles = (objs: any[]) => {
  return objs.reduce((final, obj) => {
    if (obj) {
      Object.entries(obj).forEach(([key, value]) => {
        if (key in final && typeof final[key] === "object") {
          final = { ...final[key], ...(value as any) };
        } else {
          final[key] = value;
        }
      });
    }

    return final;
  }, {} as Record<string, any>);
};

const wrapRule = (rule: any, selector?: any) => {
  const isFunc = typeof rule === "function";
  if (isFunc) {
    if (!selector) return rule;
    if (rule.length) {
      return (param: any) => ({ [selector]: rule(param) });
    }
    return () => ({ [selector]: rule() });
  }
  if (selector) {
    return () => ({ [selector]: rule });
  }
  return () => rule;
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
      param: VariantParam<TVariants> | VariantParam<TVariants>[]
    ): any => {
      const params = Array.isArray(param) ? param : [param];
      let sides: Side[] | undefined;
      let skipping = false;

      return mergeStyles(
        params.map((p: any) => {
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

          if (p in variants) {
            const rule = (variants as any)[p];
            return typeof rule === "function"
              ? rule(p, createVariantContext(sides))
              : rule;
          }
          if (p === true)
            return variants["$default"]?.(true, createVariantContext(sides));
          if (!isNaN(p))
            return variants["$number"]?.(
              parseFloat(p),
              createVariantContext(sides)
            );
          if (typeof p === "string" && p.includes("/")) {
            const parts = p.split("/");
            return variants["$fraction"]?.(
              parts.map(parseFloat),
              createVariantContext(sides)
            );
          }
          return variants["$custom"]?.(String(p), createVariantContext(sides));
        })
      );
    };

    return combinableHandler(handler);
  };

  const withColors = <TScheme extends ColorScheme>(
    colors: TScheme,
    handler: (color: string, context: VariantContext) => CSSInterpolation
  ) =>
    combinableHandler((param: ColorSchemeParam<TScheme>, context) => {
      const [color, shading = "default"] = (param as string).split("-") as [
        string,
        Shading | undefined
      ];
      const availColor = colors[color]?.[shading] ?? colors[color]?.[500];
      return availColor ? handler(availColor, context) : undefined;
    });

  const withModifiers: WithModifiers = (
    prefix: string,
    rule: any,
    ...names: (readonly string[])[]
  ) => {
    const result: Record<string, any> = {};
    const modifierEntries = Object.entries(modifiers);
    if (typeof rule !== "function" && typeof rule === "object") {
      rule = withVariants(rule);
    }

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

    generate([prefix], [], names, (path) => {
      modifierEntries.forEach(([modifier, selector]) => {
        const key = [modifier].concat(path).join("_");
        result[key] = wrapRule(rule, selector);
      });
      result[path.join("_")] = wrapRule(rule);
    });

    return result;
  };

  return { withValues, withColors, withVariants, withModifiers };
};

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

const createVariantContext = (sides: Side[] | undefined): VariantContext => {
  // normalize sides
  if (sides) {
    sides = [
      ...sides.reduce((set, s) => {
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
      }, new Set<Exclude<Side, SpecialSide>>()),
    ];
  }
  return {
    sides,
    withSides(name, styles, noSideStyles?) {
      if (!sides?.length) {
        if (typeof name === "string")
          return styles(name.includes("$") ? name.replace("$", "") : name);
        return typeof noSideStyles === "function" ? noSideStyles() : undefined;
      }

      return mergeStyles(
        sides.map((side) => {
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
              name.includes("$")
                ? name.replace("$", formattedSide)
                : name + formattedSide
            );
          }
          return styles(
            name(formattedSide, side as Exclude<Side, SpecialSide>)
          );
        })
      );
    },
  };
};

export interface VariantContext {
  sides?: Side[];
  withSides(
    name: (formattedSide: string, side: Exclude<Side, SpecialSide>) => string,
    styles: (name: string) => CSSInterpolation,
    noSideStyles?: () => CSSInterpolation
  ): Record<string, any>;
  withSides(
    name: string,
    styles: (name: string) => CSSInterpolation
  ): Record<string, any>;
}

export type Variants = {
  [key: string]: (
    value: any,
    context: VariantContext
  ) => CSSInterpolation | true;
};

export type DynamicResultWithKey<
  TModifierKey extends string,
  TPrefix extends string,
  TRule,
  TKey extends string
> = {
  [key in
    | `${TPrefix}_${TKey}`
    | `${TModifierKey}_${TPrefix}_${TKey}`]: DynamicRuleMapping<TRule>;
};

export type DynamicRuleMapping<TRule> = TRule extends Function
  ? TRule
  : TRule extends Variants
  ? (param: VariantParam<TRule> | VariantParam<TRule>[]) => any
  : never;

export type DynamicResult<
  TModifierKey extends string,
  TPrefix extends string,
  TRule
> = {
  [key in TPrefix]: DynamicRuleMapping<TRule>;
} & {
  [key in `${TModifierKey}_${TPrefix}`]: DynamicRuleMapping<TRule>;
};

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
  | Exclude<
      keyof TVariants,
      "$default" | "$number" | "$custom" | "$fraction" | "$sides"
    >
  | (TVariants["$number"] extends Function ? number | `${number}` : never)
  | (TVariants["$fraction"] extends Function ? `${number}/${number}` : never)
  | (TVariants["$custom"] extends (value: infer T) => any ? T : never)
  | (TVariants["$default"] extends Function ? true : never)
  | (TVariants["$sides"] extends Function ? Side | Side[] : never)
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
