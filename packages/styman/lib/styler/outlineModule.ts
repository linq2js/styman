import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const outlineModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
  withColors,
  withValues,
  colors,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("outline", {
      $number: (value: number) => ({ outlineWidth: value }),
      $custom: withColors(colors, (color) => ({ outlineColor: color })),
      $default: () => ({ outlineStyle: "solid" }),
      ...withValues(["dashed", "dotted", "double", "hidden"], (x) => ({
        outlineStyle: x,
      })),
      none: () => ({
        outline: "2px solid transparent",
        outlineOffset: "2px",
      }),
    }),
  };
};
