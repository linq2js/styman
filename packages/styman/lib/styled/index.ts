import { RuleSet, Sheet, css, sheet as originalSheet } from "../main";
import { ReactHTML, HTMLAttributes, FC, createElement } from "react";

export type Styled<R extends RuleSet> = {
  <T extends keyof ReactHTML>(element: T): (
    template: TemplateStringsArray,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: any[]
  ) => FC<HTMLAttributes<T>>;
  <T extends keyof ReactHTML>(element: T, ...args: Parameters<typeof css>): FC<
    HTMLAttributes<T>
  >;
  (...args: Parameters<Sheet<R>>): { className: string };
};

export const createStyled = <R extends RuleSet>(input: Sheet<R> | R) => {
  const sheet = typeof input === "function" ? input : originalSheet(input);

  return ((...args: any[]) => {
    if (typeof args[0] === "string") {
      if (args.length === 1) {
        const tag = args[0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (template: TemplateStringsArray, ...args: any[]) => {
          return function StyledComponent<TProps>(props: TProps): FC<TProps> {
            return createElement(tag, {
              ...props,
              className: css(
                template,
                ...args.map((a) => (typeof a === "function" ? a(props) : a))
              ),
            }) as unknown as FC<TProps>;
          };
        };
      }
      const [tag, ...styles] = args;
      return function StyledComponent<TProps>(props: TProps): FC<TProps> {
        return createElement(tag, {
          ...props,
          className: sheet(...(styles as Parameters<Sheet<R>>)),
        }) as unknown as FC<TProps>;
      };
    }
    return { className: sheet(...(args as Parameters<Sheet<R>>)) };
  }) as Styled<R>;
};
