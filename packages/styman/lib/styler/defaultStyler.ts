import { BuildContext } from "./createStyler";
import { backgroundModule } from "./backgroundModule";
import { borderModule } from "./borderModule";
import { cursorModule } from "./cursorModule";
import { fontModule } from "./fontModule";
import { sizingModule } from "./sizingModule";
import { textModule } from "./textModule";
import { listModule } from "./listModule";
import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { flexModule } from "./flexModule";
import { tableModule } from "./tableModule";
import { transformModule } from "./transformModule";
import { layoutModule } from "./layoutModule";
import { opacityModule } from "./opacityModule";
import { animationModule } from "./animationModule";
import { interactivityModule } from "./interactivityModule";
import { svgModule } from "./svgModule";
import { filterModule } from "./filterModule";
import { divideModule } from "./divideModule";
import { spaceModule } from "./spaceModule";
import { marginModule } from "./marginModule";
import { paddingModule } from "./paddingModule";
import { transitionModule } from "./transitionModule";
import { borderRadiusModule } from "./borderRadiusModule";
import { outlineModule } from "./outlineModule";
import { boxShadowModule } from "./boxShadowModule";
import { mixBlendModeModule } from "./mixBlendModeModule";
import { contentModule } from "./contentModule";

export const buildDefaultStyler = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>(
  context: BuildContext<C, M, T, S>
) => {
  return {
    ...backgroundModule(context),
    ...textModule(context),
    ...fontModule(context),
    ...cursorModule(context),
    ...borderModule(context),
    ...sizingModule(context),
    ...listModule(context),
    ...flexModule(context),
    ...tableModule(context),
    ...transformModule(context),
    ...layoutModule(context),
    ...opacityModule(context),
    ...animationModule(context),
    ...interactivityModule(context),
    ...svgModule(context),
    ...filterModule(context),

    ...divideModule(context),
    ...spaceModule(context),
    ...marginModule(context),
    ...paddingModule(context),
    ...transitionModule(context),
    ...borderRadiusModule(context),
    ...outlineModule(context),
    ...boxShadowModule(context),

    ...mixBlendModeModule(context),

    ...contentModule(context),
  };
};
