import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

const SPACING_SELECTOR = "&>:not([hidden])~:not([hidden])";

export const spacingModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("p", {
      $sides: () => true,
      $number: (value: number, { withSides }) =>
        withSides("padding", (prop) => ({ [prop]: `${value / 4}rem` })),
      $fraction: ([a, b], { withSides }) =>
        withSides("padding", (prop) => ({ [prop]: `${a / b}%` })),
    }),
    // MARGIN
    ...withModifiers("m", {
      $sides: () => true,
      auto: (_, { withSides }) =>
        withSides("margin", (prop) => ({ [prop]: "auto" })),
      $number: (value: number, { withSides }) =>
        withSides("margin", (prop) => ({ [prop]: `${value / 4}rem` })),
      $fraction: ([a, b], { withSides }) =>
        withSides("margin", (prop) => ({ [prop]: `${a / b}%` })),
    }),

    // space https://tailwindcss.com/docs/space
    ...withModifiers("s", {
      $xy: () => true,
      reverse: (_, { sides }) => {
        const isX = !sides?.includes("Y");
        return {
          [SPACING_SELECTOR]: {
            [isX ? "--sm-space-x-reverse" : "--sm-space-y-reverse"]: 1,
          },
        };
      },
      px: (_, { sides }) => {
        const isX = !sides?.includes("Y");
        return {
          [SPACING_SELECTOR]: {
            [isX ? "--sm-space-x-reverse" : "--sm-space-y-reverse"]: 0,
            [isX ? "marginRight" : "marginBottom"]: `calc(1px * var(${
              isX ? "--sm-space-x-reverse" : "--sm-space-y-reverse"
            }))`,
            [isX ? "marginLeft" : "marginTop"]: `calc(1px * calc(1 - var(${
              isX ? "--sm-space-x-reverse" : "--sm-space-y-reverse"
            })))`,
          },
        };
      },
      $number: (x: number, { sides }) => {
        const isX = !sides?.includes("Y");
        return {
          [SPACING_SELECTOR]: {
            [isX ? "--sm-space-x-reverse" : "--sm-space-y-reverse"]: 0,
            [isX ? "marginRight" : "marginBottom"]: `calc(${x / 4}rem * var(${
              isX ? "--sm-space-x-reverse" : "--sm-space-y-reverse"
            }))`,
            [isX ? "marginLeft" : "marginTop"]: `calc(${
              x / 4
            }rem * calc(1 - var(${
              isX ? "--sm-space-x-reverse" : "--sm-space-y-reverse"
            })))`,
          },
        };
      },
    }),
  };
};
