import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

const BOX_SHADOW = `var(--sm-ring-offset-shadow,0 0 #0000),var(--sm-ring-shadow,0 0 #0000),var(--sm-shadow)`;

export const boxShadowModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
  withColors,
  colors,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("shadow", {
      $default: () => ({
        "--sm-shadow": "0 1px 2px 0 rgb(0 0 0/0.05)",
        "--sm-shadow-colored": "0 1px 2px 0 var(--sm-shadow-color)",
        boxShadow: BOX_SHADOW,
      }),
      sm: () => ({
        "--sm-shadow": "0 1px 1px 0 rgb(0 0 0/0.05)",
        "--sm-shadow-colored": "0 1px 1px 0 var(--sm-shadow-color)",
        boxShadow: BOX_SHADOW,
      }),
      md: () => ({
        "--sm-shadow":
          "0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1)",
        "--sm-shadow-colored":
          "0 4px 6px -1px var(--sm-shadow-color),0 2px 4px -2px var(--sm-shadow-color)",
        boxShadow: BOX_SHADOW,
      }),
      lg: () => ({
        "--sm-shadow":
          "0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1)",
        "--sm-shadow-colored":
          "0 10px 15px -3px var(--sm-shadow-color),0 4px 6px -4px var(--sm-shadow-color)",
        boxShadow: BOX_SHADOW,
      }),
      xl: () => ({
        "--sm-shadow":
          "0 20px 25px -5px rgb(0 0 0/0.1),0 8px 10px -6px rgb(0 0 0/0.1)",
        "--sm-shadow-colored":
          "0 20px 25px -5px var(--sm-shadow-color),0 8px 10px -6px var(--sm-shadow-color)",
        boxShadow: BOX_SHADOW,
      }),
      "2xl": () => ({
        "--sm-shadow": "0 25px 50px -12px rgb(0 0 0/0.25)",
        "--sm-shadow-colored": "0 25px 50px -12px var(--sm-shadow-color)",
        boxShadow: BOX_SHADOW,
      }),
      inner: () => ({
        "--sm-shadow": "inset 0 2px 4px 0 rgb(0 0 0/0.05)",
        "--sm-shadow-colored": "inset 0 2px 4px 0 var(--sm-shadow-color)",
        boxShadow: BOX_SHADOW,
      }),
      none: () => ({
        "--sm-shadow": "0 0 #0000",
        "--sm-shadow-colored": "0 0 #0000",
        boxShadow: BOX_SHADOW,
      }),
      inherit: () => ({ "--sm-shadow-color": "inherit" }),
      current: () => ({ "--sm-shadow-color": "currentColor" }),
      $custom: withColors(colors, (x) => ({
        "--sm-shadow-color": x,
        "--sm-shadow": "var(--sm-shadow-colored)",
      })),
    }),
  };
};
