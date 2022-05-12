import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const borderModule = <C extends ColorScheme, M extends Modifiers>({
  colors,
  withModifiers,
  withVariants,
  withColors,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers(
      "border",
      withVariants({
        $sides: () => true,
        $custom: withColors(colors, (color, { withSides }) =>
          withSides("border", (name) => ({ [name]: color }))
        ),
        $number: (x: number) => ({ borderWidth: x }),
        // border style
        ...withValues(
          ["solid", "dashed", "dotted", "double", "hidden"],
          (x) => ({
            borderStyle: x,
          })
        ),
      })
    ),
    ...withModifiers(
      "rounded",
      withVariants({
        ...withValues(
          {
            none: 0,
            sm: "0.125rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: 9999,
          },
          (x) => ({ borderRadius: x })
        ),
      })
    ),
  };
};
