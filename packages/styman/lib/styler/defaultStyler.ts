import { defaultColorScheme } from "./defaultColorScheme";
import { BuildContext, createStyler } from "./createStyler";
import { backgroundModule } from "./backgroundModule";
import { borderModule } from "./borderModule";
import { cursorModule } from "./cursorModule";
import { fontModule } from "./fontModule";
import { sizingModule } from "./sizingModule";
import { spacingModule } from "./spacingModule";
import { textModule } from "./textModule";
import { ColorScheme, Modifiers } from "../dynamic";

export const defaultStylerBuilder = <
  C extends ColorScheme,
  M extends Modifiers
>(
  context: BuildContext<C, M>
) => {
  return {
    ...backgroundModule(context),
    ...textModule(context),
    ...fontModule(context),
    ...cursorModule(context),
    ...borderModule(context),
    ...sizingModule(context),
    ...spacingModule(context),
  };
};

export const defaultStyler = createStyler({
  colors: defaultColorScheme,
  build: defaultStylerBuilder,
});
