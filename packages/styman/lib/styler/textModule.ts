import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const textModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  colors,
  textSizes,
  withModifiers,
  withColors,
  withValues,
}: BuildContext<C, M, T, S>) => {
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
      ...withValues(textSizes, (x) => x),
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
