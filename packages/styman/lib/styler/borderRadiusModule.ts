import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const borderRadiusModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("rounded", {
      $number: (x: number) => ({ borderRadius: x }),
      $fraction: ([a, b]) => ({ borderRadius: `${a / b}%` }),
      // $custom: (value: string | number) => ({ borderRadius: value }),
      ...withValues(
        {
          none: 0,
          sm: "0.125rem",
          md: "0.375rem",
          lg: "0.5rem",
          xl: "0.75rem",
          "2xl": "1rem",
          "3xl": "1.5rem",
          full: 9999,
        },
        (x) => ({ borderRadius: x })
      ),
    }),
  };
};
