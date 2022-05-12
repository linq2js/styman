import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const textModule = <C extends ColorScheme, M extends Modifiers>({
  colors,
  withModifiers,
  withColors,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("tracking", {
      ...withValues(
        {
          tighter: "-0.05em",
          tight: "-0.025em",
          normal: "0em",
          wide: "0.025em",
          wider: "0.05em",
          widest: "0.1em",
        },
        (x) => ({
          letterSpacing: x,
        })
      ),
    }),
    // text Decoration Thickness
    ...withModifiers("decoration", {
      // decoration color
      $custom: withColors(colors, (x) => ({ textDecorationColor: x })),
      $number: (value: number) => ({ textDecorationThickness: `${value}px` }),
      "no-underline": () => ({ textDecorationLine: "none" }),
      ...withValues(["underline", "overline", "line-through"], (x) => ({
        textDecorationLine: x,
      })),
      inherit: () => ({ textDecorationColor: "inherit" }),
      current: () => ({ textDecorationColor: "currentColor" }),
      ...withValues(["solid", "double", "dotted", "dashed", "wavy"], (x) => ({
        textDecorationStyle: x,
      })),
      ...withValues(["auto", "from-font"], (x) => ({
        textDecorationThickness: x,
      })),
    }),
    ...withModifiers("text", {
      // text transform
      ...withValues(["uppercase", "lowercase", "capitalize", "none"], (x) => ({
        textTransform: x,
      })),
      // text overflow
      truncate: () => ({
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }),
      ellipsis: () => ({ textOverflow: "ellipsis" }),
      clip: () => ({ textOverflow: "clip" }),
      // text size
      xs: () => ({ fontSize: "0.75rem", lineHeight: "1rem" }),
      sm: () => ({ fontSize: "0.875rem", lineHeight: "1.25rem" }),
      base: () => ({ fontSize: "1rem", lineHeight: "1.5rem" }),
      lg: () => ({ fontSize: "1.125rem", lineHeight: "1.75rem" }),
      xl: () => ({ fontSize: "1.25rem", lineHeight: "1.75rem" }),
      "2xl": () => ({ fontSize: "1.5rem", lineHeight: "2rem" }),
      "3xl": () => ({ fontSize: "1.875rem", lineHeight: "2.25rem" }),
      "4xl": () => ({ fontSize: "2.25rem", lineHeight: "2.5rem" }),
      "5xl": () => ({ fontSize: "3rem", lineHeight: 1 }),
      "6xl": () => ({ fontSize: "3.75rem", lineHeight: 1 }),
      "7xl": () => ({ fontSize: "4.5rem", lineHeight: 1 }),
      "8xl": () => ({ fontSize: "6rem", lineHeight: 1 }),
      "9xl": () => ({ fontSize: "8rem", lineHeight: 1 }),
      // text align
      ...withValues(["left", "right", "center", "justify"], (x) => ({
        textAlign: x,
      })),
      // text color
      $custom: withColors(colors, (color) => ({ color })),
    }),
    // indent
    ...withModifiers("indent", {
      px: () => ({ textIndent: "1px" }),
      $number: (value: number) => ({ textIndent: `${value / 4}rem` }),
    }),
    // whitespace
    ...withModifiers("whitespace", {
      ...withValues(
        ["normal", "pre", "pre-wrap", "pre-line", "nowrap"],
        (x) => ({ whiteSpace: x })
      ),
    }),
    // vertical align
    ...withModifiers("align", {
      ...withValues(
        [
          "baseline",
          "top",
          "middle",
          "bottom",
          "text-top",
          "text-bottom",
          "sub",
          "super",
        ],
        (x) => ({ verticalAlign: x })
      ),
    }),
    // word break
    ...withModifiers("break", {
      normal: () => ({ overflowWrap: "normal", wordBreak: "normal" }),
      words: () => ({ overflowWrap: "break-word" }),
      all: () => ({ workBreak: "break-all" }),
    }),
  };
};
