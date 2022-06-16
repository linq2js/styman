import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const MARGIN_KEYMAP = {
  m: "margin",
  mt: "marginTop",
  ml: "marginLeft",
  mb: "marginBottom",
  mr: "marginRight",
  mx: ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"],
};

export const marginModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  spacings,
  withModifiers,
  withValues,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers(["m", "ml", "mr", "mb", "mt", "mx", "my"], {
      px: (_, { withKey }) =>
        withKey(MARGIN_KEYMAP, (prop) => ({ [prop]: "1px" })),
      auto: (_, { withKey }) =>
        withKey(MARGIN_KEYMAP, (prop) => ({ [prop]: "auto" })),
      $number: (value: number, { withKey }) =>
        withKey(MARGIN_KEYMAP, (prop) => ({ [prop]: `${value / 4}rem` })),
      $fraction: ([a, b], { withKey }) =>
        withKey(MARGIN_KEYMAP, (prop) => ({ [prop]: `${(a / b) * 100}%` })),
      ...withValues(spacings, (value, { withKey }) =>
        withKey(MARGIN_KEYMAP, (prop) => ({ [prop]: `${value / 4}rem` }))
      ),
    }),
  };
};
