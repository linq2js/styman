import { BuildContext } from "./createStyler";
import { backgroundModule } from "./backgroundModule";
import { borderModule } from "./borderModule";
import { cursorModule } from "./cursorModule";
import { fontModule } from "./fontModule";
import { sizingModule } from "./sizingModule";
import { spacingModule } from "./spacingModule";
import { textModule } from "./textModule";
import { listModule } from "./listModule";
import { ColorScheme, Modifiers } from "../dynamic";
import { flexModule } from "./flexModule";
import { tableModule } from "./tableModule";
import { transformModule } from "./transformModule";
import { layoutModule } from "./layoutModule";

export const buildDefaultStyler = <C extends ColorScheme, M extends Modifiers>(
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
    ...listModule(context),
    ...flexModule(context),
    ...tableModule(context),
    ...transformModule(context),
    ...layoutModule(context),
  };
};
