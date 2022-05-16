import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const marginModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("margin", {
      $sides: () => true,
      auto: (_, { withSides }) =>
        withSides("margin", (prop) => ({ [prop]: "auto" })),
      $number: (value: number, { withSides }) =>
        withSides("margin", (prop) => ({ [prop]: `${value / 4}rem` })),
      $fraction: ([a, b], { withSides }) =>
        withSides("margin", (prop) => ({ [prop]: `${a / b}%` })),
    }),
  };
};
