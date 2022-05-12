import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const listModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("list", {
      ...withValues(["inside", "outside"], (x) => ({ listStylePosition: x })),
      ...withValues(["none", "disc", "decimal"], (x) => ({
        listStyleType: x,
      })),
    }),
  };
};
