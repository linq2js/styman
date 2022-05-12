import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const textModule = <C extends ColorScheme, M extends Modifiers>({
  colors,
  withModifiers,
  withVariants,
  withColors,
  withValues,
}: BuildContext<C, M>) => {
  return withModifiers(
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
      $custom: withColors(colors, (color) => ({ color })),
    })
  );
};
