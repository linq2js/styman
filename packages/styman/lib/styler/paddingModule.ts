import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const paddingModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("padding", {
      px: (_, { withSides }) =>
        withSides("padding", (prop) => ({ [prop]: "1px" })),
      $sides: () => true,
      $number: (value: number, { withSides }) =>
        withSides("padding", (prop) => ({ [prop]: `${value / 4}rem` })),
      $fraction: ([a, b], { withSides }) =>
        withSides("padding", (prop) => ({ [prop]: `${(a / b) * 100}%` })),
    }),
  };
};
