import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const opacityModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("opacity", {
      $number: (x: number) => ({ opacity: x / 100 }),
    }),
  };
};
