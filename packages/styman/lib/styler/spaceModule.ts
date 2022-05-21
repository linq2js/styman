import { ColorScheme, Modifiers } from "../dynamic";
import { SPACING_SELECTOR } from "../utils";
import { BuildContext } from "./createStyler";

const KEYMAP = {
  s: ["x", "y"],
  sx: "x",
  sy: "y",
};

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
    ...withModifiers(["s", "sx", "sy"], {
      reverse: (_, { withKey }) =>
        withKey(KEYMAP, (prop) => ({ [`--sm-space-${prop}-reverse`]: 1 })),
      px: (_, { withKey }) =>
        withKey(KEYMAP, (prop) => getSpacing(prop === "x", "1px")),
      $number: (x: number, { withKey }) =>
        withKey(KEYMAP, (prop) => getSpacing(prop === "x", `${x / 4}rem`)),
    }),
  };
};
