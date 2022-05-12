import {
  withModifiers,
  withVariants,
  withColors,
  withValues,
  ColorScheme,
} from "../dynamic";
import { defaultModifiers } from "../dynamic/modifiers";

export interface PresetOptions<
  TModifiers extends Record<string, string>,
  TColors extends ColorScheme
> {
  modifiers?: TModifiers;
  colorScheme?: TColors;
}

export const createPreset = <
  TModifiers extends Record<string, string>,
  TColors extends ColorScheme
>({
  modifiers = defaultModifiers as any,
  colorScheme = {} as any,
}: PresetOptions<TModifiers, TColors>) => {
  const sizingVariants = (prop: string) =>
    withValues(
      {
        px: "1px",
        auto: "auto",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      },
      (x) => ({ [prop]: x })
    );
  const minSizingVariants = (prop: string) =>
    withValues(
      {
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        full: "100%",
      },
      (x) => ({ [prop]: x })
    );

  const sizingNumberVariants = (prop: string) => (v: number) => {
    return { [prop]: v / 4 + "rem" };
  };
  const sizingFractionVariants =
    (prop: string) =>
    ([a, b]: [number, number]) => {
      return { [prop]: a / b + "%" };
    };

  return {
    ...withModifiers(
      modifiers,
      "back",
      withVariants({
        $custom: withColors(colorScheme, (color, { withSides }) =>
          withSides("background", (name) => ({ [name]: color }))
        ),
      })
    ),
    ...withModifiers(
      modifiers,
      "text",
      withVariants({
        ...withValues(
          {
            xs: { fontSize: "0.75rem", lineHeight: "1rem" },
            sm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
            base: { fontSize: "1rem", lineHeight: "1.5rem" },
            lg: { fontSize: "1.125rem", lineHeight: "1.75rem" },
            xl: { fontSize: "1.25rem", lineHeight: "1.75rem" },
            "2xl": { fontSize: "1.5rem", lineHeight: "2rem" },
            "3xl": { fontSize: "1.875rem", lineHeight: "2.25rem" },
            "4xl": { fontSize: "2.25rem", lineHeight: "2.5rem" },
            "5xl": { fontSize: "3rem", lineHeight: 1 },
            "6xl": { fontSize: "3.75rem", lineHeight: 1 },
            "7xl": { fontSize: "4.5rem", lineHeight: 1 },
            "8xl": { fontSize: "6rem", lineHeight: 1 },
            "9xl": { fontSize: "8rem", lineHeight: 1 },
          },
          (x) => x
        ),
        $custom: withColors(colorScheme, (color) => ({ color })),
      })
    ),
    ...withModifiers(
      modifiers,
      "font",
      withVariants({
        // font-style
        ...withValues({ italic: "italic", "non-italic": "normal" }, (x) => ({
          fontStyle: x,
        })),
        // font-weight
        ...withValues(
          {
            thin: 100,
            extraLight: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
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
      })
    ),
    ...withModifiers(
      modifiers,
      "cursor",
      withVariants({
        ...withValues(
          [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "zoom-in",
            "zoom-out",
          ],
          (x) => ({ cursor: x })
        ),
      })
    ),
    ...withModifiers(
      modifiers,
      "border",
      withVariants({
        $sides: () => true,
        $custom: withColors(colorScheme, (color, { withSides }) =>
          withSides("border", (name) => ({ [name]: color }))
        ),
        $number: (x: number) => ({ borderWidth: x }),
        // border style
        ...withValues(
          ["solid", "dashed", "dotted", "double", "hidden"],
          (x) => ({
            borderStyle: x,
          })
        ),
      })
    ),
    ...withModifiers(
      modifiers,
      "rounded",
      withVariants({
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
          (x) => ({ borderRadius: x })
        ),
      })
    ),
    ...withModifiers(
      modifiers,
      "leading",
      withVariants({
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
      })
    ),
    ...withModifiers(
      modifiers,
      "width",
      withVariants({
        $number: sizingNumberVariants("width"),
        $fraction: sizingFractionVariants("width"),
        ...sizingVariants("width"),
      })
    ),
    ...withModifiers(
      modifiers,
      "min_width",
      withVariants({
        $number: sizingNumberVariants("min-width"),
        $fraction: sizingFractionVariants("min-width"),
        ...minSizingVariants("min-width"),
      })
    ),
    ...withModifiers(
      modifiers,
      "height",
      withVariants({
        $number: sizingNumberVariants("height"),
        $fraction: sizingFractionVariants("height"),
        ...sizingVariants("height"),
      })
    ),
    ...withModifiers(
      modifiers,
      "min_height",
      withVariants({
        $number: sizingNumberVariants("min-height"),
        $fraction: sizingFractionVariants("min-height"),
        ...minSizingVariants("min-height"),
      })
    ),
    // PADDING
    ...withModifiers(
      modifiers,
      "padding",
      withVariants({
        $sides: () => true,
        $number: (value: number, { withSides }) =>
          withSides("padding", (prop) => ({ [prop]: `${value / 4}rem` })),
        $fraction: ([a, b], { withSides }) =>
          withSides("padding", (prop) => ({ [prop]: `${a / b}%` })),
      })
    ),
    // MARGIN
    ...withModifiers(
      modifiers,
      "margin",
      withVariants({
        $sides: () => true,
        $number: (value: number, { withSides }) =>
          withSides("margin", (prop) => ({ [prop]: `${value / 4}rem` })),
        $fraction: ([a, b], { withSides }) =>
          withSides("margin", (prop) => ({ [prop]: `${a / b}%` })),
      })
    ),
  };
};
