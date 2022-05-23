import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const mixBlendModeModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("blend", {
      ...withValues(
        ["normal", "multiply", "hard-light", "difference"],
        (x) => ({ mixBlendMode: x })
      ),
    }),
  };
};
