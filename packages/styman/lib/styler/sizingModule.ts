import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

export const sizingModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
  withValues,
}: BuildContext<C, M, T, S>) => {
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

  const maxSizingVariants = (prop: string) =>
    withValues(
      {
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        full: "100%",
        none: "none",
        prose: "65ch",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "screen-sm": "640px",
        "screen-md": "768px",
        "screen-lg": "1024px",
        "screen-xl": "1280px",
        "screen-2xl": "1536px",
      },
      (x) => ({ [prop]: x })
    );

  const sizingNumberVariants = (prop: string) => (v: number) => ({
    [prop]: v / 4 + "rem",
  });

  const sizingFractionVariants =
    (prop: string) =>
    ([a, b]: [number, number]) => {
      return { [prop]: (a / b) * 100 + "%" };
    };

  return {
    ...withModifiers("w", {
      $number: sizingNumberVariants("width"),
      $fraction: sizingFractionVariants("width"),
      screen: () => ({ width: "100vw" }),
      ...sizingVariants("width"),
    }),
    ...withModifiers("min_w", {
      $number: sizingNumberVariants("minWidth"),
      $fraction: sizingFractionVariants("minWidth"),
      screen: () => ({ minWidth: "100vw" }),
      ...minSizingVariants("minWidth"),
    }),
    ...withModifiers("max_w", {
      $number: sizingNumberVariants("maxWidth"),
      $fraction: sizingFractionVariants("maxWidth"),
      screen: () => ({ maxWidth: "110vw" }),
      ...maxSizingVariants("maxWidth"),
    }),
    ...withModifiers("h", {
      $number: sizingNumberVariants("height"),
      $fraction: sizingFractionVariants("height"),
      screen: () => ({ height: "100vh" }),
      ...sizingVariants("height"),
    }),
    ...withModifiers("min_h", {
      $number: sizingNumberVariants("minHeight"),
      $fraction: sizingFractionVariants("minHeight"),
      screen: () => ({ minHeight: "100vh" }),
      ...minSizingVariants("minHeight"),
    }),
    ...withModifiers("max_h", {
      $number: sizingNumberVariants("maxHeight"),
      $fraction: sizingFractionVariants("maxHeight"),
      screen: () => ({ maxHeight: "100vh" }),
      ...maxSizingVariants("maxHeight"),
    }),
  };
};
