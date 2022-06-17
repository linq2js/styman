import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const fontModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
  withValues,
  textSizes,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("font", {
      sans: () => ({
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }),
      serif: () => ({
        fontFamily:
          'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      }),
      mono: () => ({
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      }),
      antialiased: () => ({
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
      }),
      "subpixel-antialiased": () => ({
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto",
      }),
      // font variant numeric
      "normal-nums": () => ({ fontVariantNumeric: "normal" }),
      ...withValues(
        [
          "ordinal",
          "slashed-zero",
          "lining-nums",
          "oldstyle-nums",
          "proportional-nums",
          "tabular-nums",
          "diagonal-fractions",
          "stacked-fractions",
        ],
        (x) => ({ fontVariantNumeric: x })
      ),
      // font-style
      ...withValues({ italic: "italic", "non-italic": "normal" }, (x) => ({
        fontStyle: x,
      })),
      // font-weight
      ...withValues(
        {
          thin: 100,
          extralight: 200,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900,
        },
        (x) => ({ fontWeight: x })
      ),
      // font-size
      ...withValues(textSizes, (x) => ({ fontSize: x.fontSize })),
    }),
    ...withModifiers("leading", {
      $number: (x: number) => ({ lineHeight: `${x * 0.25}rem` }),
      ...withValues(
        {
          none: 1,
          tight: 1.25,
          snug: 1.375,
          normal: 1.5,
          relaxed: 1.625,
          loose: 2,
        },
        (x) => ({ lineHeight: x })
      ),
    }),
  };
};
