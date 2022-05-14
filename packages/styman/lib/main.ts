/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, injectGlobal, CSSInterpolation } from "@emotion/css";

export type FalsyValue = false | null | undefined;

export type TruthyValue = true | 1;

export type Style = string | CSSInterpolation | (string | CSSInterpolation)[];

export type Rule = Style | ((this: any, ...args: any[]) => Style);

export type RuleSet = { [key: string]: Rule };

export type Styles<T> = {
  [key in keyof T]?: T[key] extends Style
    ? any
    : T[key] extends (param: infer P) => Style
    ? P | FalsyValue
    : void;
};

export interface Use {
  <R, S extends Styles<R>>(rules: R, styles: S): string;
}

export interface DynamicOptions<TPrefix, TSeparator = "_"> {
  prefix: TPrefix;
  separator?: TSeparator;
}

const computedStyleCache = new WeakMap<Function, Map<any, string[]>>();

const objectStyleCache = new WeakMap<any, string>();

const root = (...styles: (CSSInterpolation | string)[]) => {
  const strings: string[] = [];
  const objects: CSSInterpolation[] = [];
  styles.forEach((style) => {
    if (typeof style === "string") {
      strings.push(style);
    } else {
      objects.push(style);
    }
  });
  if (styles.length) {
    injectGlobal([strings.join(";")]);
  }
  if (objects.length) {
    injectGlobal(...objects);
  }
};

const addClasses = (classSet: Set<string>, classes: any[], rules: RuleSet) => {
  for (let klass of classes) {
    if (typeof klass === "object") {
      let k = objectStyleCache.get(klass);
      if (!k) {
        k = css(klass);
        objectStyleCache.set(klass, k);
      }
      klass = k;
    } else if (typeof klass === "function") {
      klass = use(rules, klass());
    }
    classSet.add(klass);
  }
};

export type CustomStyle<T> = string | CSSInterpolation | (() => T);

const use = <R extends RuleSet, S extends Styles<R>>(
  rules: R,
  styles: S,
  ...customStyles: CustomStyle<S>[]
) => {
  const classNames = new Set<string>();

  Object.keys(styles).forEach((key) => {
    let param = (styles as any)[key];
    // skip this class
    if (param === false || typeof param === "undefined" || param === null)
      return;
    const rule: unknown = (rules as any)[key];
    // rule does not exist
    if (!rule) return;

    if (typeof rule === "function") {
      // if rule has no param, the param must be true
      // to avoid there are duplicated cache items for truthy values
      if (!rule.length) param = true;
      let group = computedStyleCache.get(rule);
      if (!group) {
        group = new Map<any, string[]>();
        computedStyleCache.set(rule, group);
      }
      let compiledClass = group.get(param);
      // compile rule if not any
      if (!compiledClass) {
        const result = rule.call(rules, param);
        compiledClass = Array.isArray(result) ? result : [result];
        group.set(param, compiledClass);
      }
      addClasses(classNames, compiledClass, rules);
      return;
    }

    addClasses(classNames, Array.isArray(rule) ? rule : [rule], rules);
    return;
  });

  addClasses(classNames, customStyles, rules);

  return [...classNames].join(" ");
};

const sheet = <R extends RuleSet>(rules: R | (() => R)) => {
  const r = typeof rules === "function" ? rules() : rules;
  return Object.assign(
    /**
     *
     * @param styles
     * @param customStyles  It is array of class names or CSS style props
     * @returns
     */
    <S extends Styles<R>>(styles: S, ...customStyles: CustomStyle<S>[]) =>
      use(r, styles, ...customStyles),
    {
      // export input rules for later use or debug
      rules: r,
      extend<R extends RuleSet>(newRules: R) {
        return sheet({ ...r, ...newRules });
      },
    }
  );
};

export { use, sheet, root };
export { cx as cs, keyframes, cache, flush, hydrate } from "@emotion/css";
