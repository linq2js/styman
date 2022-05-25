import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const opacityModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("opacity", {
      $number: (x: number) => ({ opacity: x / 100 }),
    }),
  };
};
