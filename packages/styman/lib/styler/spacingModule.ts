import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const spacingModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("padding", {
      $sides: () => true,
      $number: (value: number, { withSides }) =>
        withSides("padding", (prop) => ({ [prop]: `${value / 4}rem` })),
      $fraction: ([a, b], { withSides }) =>
        withSides("padding", (prop) => ({ [prop]: `${a / b}%` })),
    }),
    // MARGIN
    ...withModifiers("margin", {
      $sides: () => true,
      $number: (value: number, { withSides }) =>
        withSides("margin", (prop) => ({ [prop]: `${value / 4}rem` })),
      $fraction: ([a, b], { withSides }) =>
        withSides("margin", (prop) => ({ [prop]: `${a / b}%` })),
    }),
  };
};
