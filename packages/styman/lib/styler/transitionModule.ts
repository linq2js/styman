import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { BuildContext } from "./createStyler";

const DEFAULT_TRANSITION_SETTINGS = {
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",
};

export const transitionModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
  withValues,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("delay", {
      $number: (x: number) => ({ transitionDelay: x + "ms" }),
    }),
    ...withModifiers("transition", {
      none: () => ({ transitionProperty: "none" }),
      $number: (x: number) => ({ transitionDuration: x + "ms" }),
      ...withValues(
        {
          linear: "linear",
          in: "cubic-bezier(0.4, 0, 1, 1)",
          out: "cubic-bezier(0, 0, 0.2, 1)",
          "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        },
        (x) => ({
          transitionTimingFunction: x,
        })
      ),
      ...withValues(
        {
          all: "all",
          opacity: "opacity",
          shadow: "box-shadow",
          transform: "transform",
          colors:
            "color, background-color, border-color, text-decoration-color, fill, stroke",
          $default:
            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        },
        (x) => ({
          transitionProperty: x,
          ...DEFAULT_TRANSITION_SETTINGS,
        })
      ),
    }),
  };
};
