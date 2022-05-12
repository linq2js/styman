import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const contentModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("content", {
      none: () => ({ content: "none" }),
      $custom: (value) => ({ content: `"${value}"` }),
    }),
  };
};
