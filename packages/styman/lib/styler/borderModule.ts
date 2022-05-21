import { ColorScheme, Modifiers } from "../dynamic";
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

export const borderModule = <C extends ColorScheme, M extends Modifiers>({
  colors,
  withModifiers,
  withColors,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers(["b", "bl", "br", "bt", "bb", "bx", "by"], {
      $custom: withColors(colors, (color, { withKey }) =>
        withKey(BORDER_KEYMAP, (prop) => ({ [prop]: color }))
      ),
      $number: (x: number, { withKey }) =>
        withKey(BORDER_KEYMAP, (prop) => ({ [prop + "Width"]: x })),
      // border style
      ...withValues(
        ["solid", "dashed", "dotted", "double", "hidden"],
        (x, { withKey }) =>
          withKey(BORDER_KEYMAP, (prop) => ({ [prop + "Style"]: x }))
      ),
    }),
  };
};
