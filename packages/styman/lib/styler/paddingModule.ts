import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const PADDING_KEYMAP = {
  p: "padding",
  pt: "paddingTop",
  pl: "paddingLeft",
  pb: "paddingBottom",
  pr: "paddingRight",
  px: ["paddingLeft", "paddingRight"],
  py: ["paddingTop", "paddingBottom"],
};

export const paddingModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
  withValues,
  spacings,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers(["p", "pl", "pt", "pr", "pb", "px", "py"], {
      px: (_, { withKey }) =>
        withKey(PADDING_KEYMAP, (prop) => ({ [prop]: "1px" })),
      $number: (value: number, { withKey }) =>
        withKey(PADDING_KEYMAP, (prop) => ({ [prop]: `${value / 4}rem` })),
      $fraction: ([a, b], { withKey }) =>
        withKey(PADDING_KEYMAP, (prop) => ({ [prop]: `${(a / b) * 100}%` })),
      ...withValues(spacings, (value, { withKey }) =>
        withKey(PADDING_KEYMAP, (prop) => ({ [prop]: `${value / 4}rem` }))
      ),
    }),
  };
};
