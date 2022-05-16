import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const svgModule = <C extends ColorScheme, M extends Modifiers>({
  colors,
  withColors,
  withModifiers,
}: BuildContext<C, M>) => {
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
