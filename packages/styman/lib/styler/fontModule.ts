import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const fontModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withValues,
}: BuildContext<C, M>) => {
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
        (x) => ({
          fontVariantNumeric: x,
        })
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
          semiBold: 600,
          bold: 700,
          extrabold: 800,
          black: 900,
        },
        (x) => ({ fontWeight: x })
      ),
      // font-size
      ...withValues(
        {
          xs: "0.75rem",
          sm: "0.875rem",
          base: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "2.25rem",
          "5xl": "3rem",
          "6xl": "3.75rem",
          "7xl": "4.5rem",
          "8xl": "6rem",
          "9xl": "8rem",
        },
        (x) => ({ fontSize: x })
      ),
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
