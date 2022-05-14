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
  };
};

// export const createDefaultStyler = <C extends ColorScheme, M extends Modifiers>(options: StylerOptions<C, M>) => {
//   return createStyler({
//     ,,,options,
//     build(context) {
//       return
//     }
//   });
// };

// export const defaultStyler = createStyler({
//   colors: defaultColorScheme,
//   build: buildDefaultStyler,
// });
