/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, injectGlobal, CSSInterpolation } from "@emotion/css";
import { once } from "./utils";

export type FalsyValue = false | null | undefined;

export type TruthyValue = true | 1;

export type Style = string | CSSInterpolation | (string | CSSInterpolation)[];

export type Rule = Style | ((this: any, ...args: any[]) => Style);

export type RuleSet = { [key: string]: Rule };

export type Styles<T> = T extends Array<any>
  ? never
  : {
      [key in keyof T]?: T[key] extends Style
        ? any
        : T[key] extends (param: infer P) => Style
        ? P | FalsyValue
        : void;
    };

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

export interface Use<TBaseRules = RuleSet> {
  <R extends TBaseRules>(
    rules: R,
    styles: Styles<R> | (Styles<R> | FalsyValue)[],
    ...customStyles: CustomStyle<Styles<R>>[]
  ): string;

  <R extends TBaseRules, S extends Styles<R>>(rules: R, styles: () => S): (
    enabled?: any
  ) => string;
}

const use: Use = (...args: any[]): any => {
  if (typeof args[1] === "function") {
    const [rules, factory] = args;
    const useOnce = once(() => {
      return use(rules, factory());
    });
    return (...args: any[]) => {
      const enabled = !args.length || args[0];
      if (!enabled) return "css-0";
      return useOnce();
    };
  }

  const [rules, styles, ...customStyles] = args;
  const classNames = new Set<string>();

  (Array.isArray(styles) ? styles : [styles]).forEach((styles) => {
    if (!styles) return;
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
        const serializedParam = JSON.stringify(param);
        let compiledClass = group.get(serializedParam);
        // compile rule if not any
        if (!compiledClass) {
          const result = rule.call(rules, param);
          const tempClasses = new Set<string>();
          addClasses(
            tempClasses,
            Array.isArray(result) ? result : [result],
            rules
          );
          compiledClass = [...tempClasses];
          group.set(serializedParam, compiledClass);
        }
        addClasses(classNames, compiledClass, rules);
        return;
      }

      addClasses(classNames, Array.isArray(rule) ? rule : [rule], rules);
      return;
    });
  });

  addClasses(classNames, customStyles, rules);

  return [...classNames].join(" ");
};

export type Sheet<R extends RuleSet> = {
  (styles: () => Styles<R>): (enabled?: any) => string;

  (
    styles: Styles<R> | (Styles<R> | FalsyValue)[],
    ...customStyles: CustomStyle<Styles<R>>[]
  ): string;

  readonly rules: R;
  extend<R2 extends R>(rules: R2): Sheet<R & R2>;
};

const sheet = <R extends RuleSet>(rules: R | (() => R)): Sheet<R> => {
  const r = typeof rules === "function" ? rules() : rules;
  const styler = (...args: any[]): any => (use as Function)(r, ...args);
  return Object.assign(styler, {
    // export input rules for later use or debug
    rules: r,
    extend(newRules: any) {
      return sheet({ ...r, ...newRules });
    },
    styled(builder: Function): any {
      return (props: any) => builder(styler, props);
    },
  });
};

export { use, sheet, root, once };
export { cx as cs, keyframes, cache, flush, hydrate } from "@emotion/css";
