import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const sizingModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withVariants,
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

  const sizingNumberVariants = (prop: string) => (v: number) => ({
    [prop]: v / 4 + "rem",
  });

  const sizingFractionVariants =
    (prop: string) =>
    ([a, b]: [number, number]) => {
      return { [prop]: a / b + "%" };
    };

  return {
    ...withModifiers(
      "width",
      withVariants({
        $number: sizingNumberVariants("width"),
        $fraction: sizingFractionVariants("width"),
        ...sizingVariants("width"),
      })
    ),
    ...withModifiers(
      "min_width",
      withVariants({
        $number: sizingNumberVariants("min-width"),
        $fraction: sizingFractionVariants("min-width"),
        ...minSizingVariants("min-width"),
      })
    ),
    ...withModifiers(
      "height",
      withVariants({
        $number: sizingNumberVariants("height"),
        $fraction: sizingFractionVariants("height"),
        ...sizingVariants("height"),
      })
    ),
    ...withModifiers(
      "min_height",
      withVariants({
        $number: sizingNumberVariants("min-height"),
        $fraction: sizingFractionVariants("min-height"),
        ...minSizingVariants("min-height"),
      })
    ),
  };
};
