import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";
import { SPACING_SELECTOR } from "../utils";

export const DIVIDE_KEYMAP = {
  d: ["x", "y"],
  dx: "x",
  dy: "y",
};

const getWidth = (isX: boolean, value: string) => {
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

const getColor = (isX: boolean, color: string) => {
  if (isX) {
    return {
      [SPACING_SELECTOR]: { borderLeftColor: color, borderRightColor: color },
    };
  }
  return {
    [SPACING_SELECTOR]: { borderTopColor: color, borderBottomColor: color },
  };
};

const getStyle = (isX: boolean, style: string) => {
  if (isX) {
    return {
      [SPACING_SELECTOR]: { borderLeftStyle: style, borderRightStyle: style },
    };
  }
  return {
    [SPACING_SELECTOR]: { borderTopStyle: style, borderBottomStyle: style },
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
    ...withModifiers(["d", "dx", "dy"], {
      $xy: () => true,
      reverse: (_, { withKey }) =>
        withKey(DIVIDE_KEYMAP, (prop) => ({
          [SPACING_SELECTOR]: { [`--sm-divide-${prop}-reverse`]: 1 },
        })),
      px: (_, { withKey }) =>
        withKey(DIVIDE_KEYMAP, (prop) => getWidth(prop === "x", "1px")),
      $number: (x: number, { withKey }) =>
        withKey(DIVIDE_KEYMAP, (prop) => getWidth(prop === "x", `${x / 4}rem`)),
      $custom: withColors(colors, (color, { withKey }) =>
        withKey(DIVIDE_KEYMAP, (prop) => getColor(prop === "x", color))
      ),
      ...withValues(
        ["solid", "dotted", "dashed", "none", "double"],
        (style, { withKey }) =>
          withKey(DIVIDE_KEYMAP, (prop) => getStyle(prop === "x", style) as any)
      ),
    }),
  };
};
