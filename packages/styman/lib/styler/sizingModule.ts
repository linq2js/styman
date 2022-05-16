import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const sizingModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withValues,
}: BuildContext<C, M>) => {
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
    ...withModifiers("width", {
      $number: sizingNumberVariants("width"),
      $fraction: sizingFractionVariants("width"),
      screen: () => ({ width: "100vw" }),
      ...sizingVariants("width"),
    }),
    ...withModifiers("min_width", {
      $number: sizingNumberVariants("min-width"),
      $fraction: sizingFractionVariants("min-width"),
      screen: () => ({ minWidth: "100vw" }),
      ...minSizingVariants("min-width"),
    }),
    ...withModifiers("max_width", {
      $number: sizingNumberVariants("max-width"),
      $fraction: sizingFractionVariants("max-width"),
      screen: () => ({ maxWidth: "110vw" }),
      ...maxSizingVariants("max-width"),
    }),
    ...withModifiers("height", {
      $number: sizingNumberVariants("height"),
      $fraction: sizingFractionVariants("height"),
      screen: () => ({ height: "100vh" }),
      ...sizingVariants("height"),
    }),
    ...withModifiers("min_height", {
      $number: sizingNumberVariants("min-height"),
      $fraction: sizingFractionVariants("min-height"),
      screen: () => ({ minHeight: "100vh" }),
      ...minSizingVariants("min-height"),
    }),
    ...withModifiers("max_height", {
      $number: sizingNumberVariants("max-height"),
      $fraction: sizingFractionVariants("max-height"),
      screen: () => ({ maxHeight: "100vh" }),
      ...maxSizingVariants("max-height"),
    }),
  };
};
