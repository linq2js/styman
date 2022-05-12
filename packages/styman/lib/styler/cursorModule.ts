import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const cursorModule = <C extends ColorScheme, M extends Modifiers>({
  withValues,
  withModifiers,
}: BuildContext<C, M>) => {
  return withModifiers("cursor", {
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
  });
};
