import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const BORDER_KEYMAP = {
  b: "border",
  bt: "borderTop",
  bl: "borderLeft",
  bb: "borderBottom",
  br: "borderRight",
  bx: ["borderLeft", "borderRight"],
  by: ["borderTop", "borderBottom"],
};

export const borderModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  colors,
  withModifiers,
  withColors,
  withValues,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers(["b", "bl", "br", "bt", "bb", "bx", "by"], {
      $custom: withColors(colors, (color, { withKey }) =>
        withKey(BORDER_KEYMAP, (prop) => ({ [prop + "Color"]: color }))
      ),
      $number: (x: number, { withKey }) =>
        withKey(BORDER_KEYMAP, (prop) => ({ [prop + "Width"]: x })),
      // border style
      ...withValues(
        ["solid", "dashed", "dotted", "double", "hidden", "none"],
        (x, { withKey }) =>
          withKey(BORDER_KEYMAP, (prop) => ({ [prop + "Style"]: x }))
      ),
    }),
  };
};
