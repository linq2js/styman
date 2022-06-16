import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const contentModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("content", {
      none: () => ({ content: "none" }),
      $custom: (value) => ({ content: `"${value}"` }),
    }),
  };
};
