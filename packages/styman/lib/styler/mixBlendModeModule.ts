import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const mixBlendModeModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
  withValues,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("blend", {
      ...withValues(
        ["normal", "multiply", "hard-light", "difference"],
        (x) => ({ mixBlendMode: x })
      ),
    }),
  };
};
