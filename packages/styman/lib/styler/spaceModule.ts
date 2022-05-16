import { ColorScheme, Modifiers } from "../dynamic";
import { SPACING_SELECTOR } from "../utils";
import { BuildContext } from "./createStyler";

const getSpacing = (isX: boolean, value: string) => {
  if (isX) {
    return {
      [SPACING_SELECTOR]: {
        "--sm-space-x-reverse": 0,
        marginRight: `calc(${value} * var(--sm-space-x-reverse))`,
        marginLeft: `calc(${value} * calc(1 - var(--sm-space-x-reverse)))`,
      },
    };
  }
  return {
    [SPACING_SELECTOR]: {
      "--sm-space-y-reverse": 0,
      marginBottom: `calc(${value} * var(--sm-space-y-reverse))`,
      marginTop: `calc(${value} * calc(1 - var(--sm-space-y-reverse)))`,
    },
  };
};

export const spaceModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("space", {
      $xy: () => true,
      reverse: (_, { sides }) => {
        const isX = !sides?.includes("Y");
        return {
          [SPACING_SELECTOR]: {
            [isX ? "--sm-space-x-reverse" : "--sm-space-y-reverse"]: 1,
          },
        };
      },
      px: (_, { sides }) => getSpacing(!sides?.includes("Y"), "1px"),
      $number: (x: number, { sides }) =>
        getSpacing(!sides?.includes("Y"), `${x / 4}rem`),
    }),
  };
};
