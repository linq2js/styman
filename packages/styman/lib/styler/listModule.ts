import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const listModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
  withValues,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("list", {
      ...withValues(["inside", "outside"], (x) => ({ listStylePosition: x })),
      ...withValues(["none", "disc", "decimal"], (x) => ({
        listStyleType: x,
      })),
    }),
  };
};
