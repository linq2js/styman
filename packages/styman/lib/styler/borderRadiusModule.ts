import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const BORDER_RADIUS_KEYMAP = {
  r: "borderRadius",
  r_tl: "borderTopLeftRadius",
  r_bl: "borderBottomLeftRadius",
  r_tr: "borderTopRightRadius",
  r_br: "borderBottomRightRadius",
  rt: ["borderTopLeftRadius", "borderTopRightRadius"],
  rl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
  rb: ["borderBottomLeftRadius", "borderBottomRightRadius"],
  rr: ["borderTopRightRadius", "borderBottomRightRadius"],
};

export const borderRadiusModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers(
      ["r", "r_tl", "r_bl", "r_tr", "r_br", "rt", "rl", "rb", "rr"],
      {
        $default: (_, { withKey }) =>
          withKey(BORDER_RADIUS_KEYMAP, (prop) => ({ [prop]: "0.25rem" })),
        $number: (x: number, { withKey }) =>
          withKey(BORDER_RADIUS_KEYMAP, (prop) => ({ [prop]: x })),
        $fraction: ([a, b], { withKey }) =>
          withKey(BORDER_RADIUS_KEYMAP, (prop) => ({
            [prop]: `${(a / b) * 100}%`,
          })),
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
          (x, { withKey }) =>
            withKey(BORDER_RADIUS_KEYMAP, (prop) => ({ [prop]: x }))
        ),
      }
    ),
  };
};
