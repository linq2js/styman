import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const svgModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  colors,
  withColors,
  withModifiers,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("fill", {
      inherit: () => ({ fill: "inherit" }),
      current: () => ({ fill: "currentColor" }),
      $custom: withColors(colors, (x) => ({ fill: x })),
    }),
    ...withModifiers("stroke", {
      inherit: () => ({ stroke: "inherit" }),
      current: () => ({ stroke: "currentColor" }),
      $number: (x: number) => ({ strokeWidth: x }),
      $custom: withColors(colors, (x) => ({ stroke: x })),
    }),
  };
};
