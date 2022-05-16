import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const borderModule = <C extends ColorScheme, M extends Modifiers>({
  colors,
  withModifiers,
  withColors,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("border", {
      $sides: () => true,
      $custom: withColors(colors, (color, { withSides }) =>
        withSides("border", (name) => ({ [name]: color }))
      ),
      $number: (x: number) => ({ borderWidth: x }),
      // border style
      ...withValues(["solid", "dashed", "dotted", "double", "hidden"], (x) => ({
        borderStyle: x,
      })),
    }),
  };
};
