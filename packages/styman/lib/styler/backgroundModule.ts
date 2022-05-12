import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const backgroundModule = <C extends ColorScheme, M extends Modifiers>({
  colors,
  withModifiers,
  withVariants,
  withColors,
}: BuildContext<C, M>) => {
  return withModifiers(
    "back",
    withVariants({
      $custom: withColors(colors, (color, { withSides }) =>
        withSides("background", (name) => ({ [name]: color }))
      ),
    })
  );
};
