import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";
import { SPACING_SELECTOR } from "../utils";

const getDivide = (isX: boolean, value: string) => {
  if (isX) {
    return {
      [SPACING_SELECTOR]: {
        borderRightWidth: `calc(${value} * var(--sm-divide-y-reverse, 0))`,
        borderLeftWidth: `calc(${value} * calc(1 - var(--sm-divide-x-reverse, 0)))`,
      },
    };
  }
  return {
    [SPACING_SELECTOR]: {
      borderBottomWidth: `calc(${value} * var(--sm-divide-y-reverse, 0))`,
      borderTopWidth: `calc(${value} * calc(1 - var(--sm-divide-y-reverse, 0)))`,
    },
  };
};

// divide https://tailwindcss.com/docs/divide-style
export const divideModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withValues,
  withColors,
  colors,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("divide", {
      $xy: () => true,
      reverse: (_, { sides }) => {
        const isX = !sides?.includes("Y");
        return {
          [SPACING_SELECTOR]: {
            [isX ? "--sm-divide-x-reverse" : "--sm-divide-y-reverse"]: 1,
          },
        };
      },
      px: (_, { sides }) => getDivide(!sides?.includes("Y"), "1px"),
      $number: (x: number, { sides }) =>
        getDivide(!sides?.includes("Y"), `${x / 4}rem`),
      $custom: withColors(colors, (x, { sides }) => {
        const isX = !sides?.includes("Y");
        if (isX) {
          return {
            [SPACING_SELECTOR]: { borderLeftColor: x, borderRightColor: x },
          };
        }
        return {
          [SPACING_SELECTOR]: { borderTopColor: x, borderBottomColor: x },
        };
      }),
      ...withValues(
        ["solid", "dotted", "dashed", "none", "double"],
        (x, { sides }) => {
          const isX = !sides?.includes("Y");
          if (isX) {
            return {
              [SPACING_SELECTOR]: { borderLeftStyle: x, borderRightStyle: x },
            };
          }
          return {
            [SPACING_SELECTOR]: { borderTopStyle: x, borderBottomStyle: x },
          };
        }
      ),
    }),
  };
};
