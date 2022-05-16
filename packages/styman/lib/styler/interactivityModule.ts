import { ColorScheme, Modifiers, withValues } from "../dynamic";
import { BuildContext } from "./createStyler";

export const interactivityModule = <
  C extends ColorScheme,
  M extends Modifiers
>({
  colors,
  withModifiers,
  withColors,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("accent", {
      inherit: () => ({ accentColor: "inherit" }),
      current: () => ({ accentColor: "currentColor" }),
      $custom: withColors(colors, (x) => ({ accentColor: x })),
    }),

    ...withModifiers("caret", {
      inherit: () => ({ caretColor: "inherit" }),
      current: () => ({ caretColor: "currentColor" }),
      $custom: withColors(colors, (x) => ({ caretColor: x })),
    }),

    ...withModifiers("pointer_events", {
      ...withValues(["none", "auto"], (x) => ({ pointerEvents: x })),
    }),

    ...withModifiers("scroll", {
      $sides: () => true,
      ...withValues(["smooth", "auto"], (x) => ({ scrollBehavior: x })),
    }),
    ...withModifiers("scrollp", {
      $number: (x: number, { withSides }) =>
        withSides("scrollPadding$", (name) => ({ [name]: `${x / 4}rem` })),
    }),
    ...withModifiers("scrollm", {
      $number: (x: number, { withSides }) =>
        withSides("scrollMargin$", (name) => ({ [name]: `${x / 4}rem` })),
    }),
    ...withModifiers("snap", {
      ...withValues(["mandatory", "proximity"], (x) => ({
        "--tw-scroll-snap-strictness": x,
      })),
      ...withValues(["start", "end", "center", "align-none"], (x) => ({
        scrollSnapAlign: x === "align-none" ? "none" : x,
      })),
      ...withValues(["normal", "always"], (x) => ({ scrollSnapStop: x })),
      ...withValues(
        {
          none: "none",
          x: "x var(--tw-scroll-snap-strictness)",
          y: "y var(--tw-scroll-snap-strictness)",
          both: "both var(--tw-scroll-snap-strictness)",
        },
        (x) => ({ scrollSnapType: x })
      ),
    }),

    ...withModifiers("touch", {
      ...withValues(
        [
          "auto",
          "none",
          "pan-x",
          "pan-y",
          "pan-left",
          "pan-right",
          "pan-up",
          "pan-down",
          "pinch-zoom",
          "manipulation",
        ],
        (x) => ({ touchAction: x })
      ),
    }),

    ...withModifiers("resize", {
      $default: () => ({ resize: "both" }),
      ...withValues({ none: "none", x: "vertical", y: "horizontal" }, (x) => ({
        pointerEvents: x,
      })),
    }),
    ...withModifiers("select", {
      ...withValues(["none", "text", "all", "auto"], (x) => ({
        userSelect: x,
      })),
    }),
    ...withModifiers("will_change", {
      ...withValues(
        {
          auto: "auto",
          scroll: "scroll-position",
          contents: "contents",
          transform: "transform",
        },
        (x) => ({ willChange: x })
      ),
    }),
    ...withModifiers("appearance", {
      ...withValues(
        [
          "none",
          "auto",
          "button",
          "menulist-button",
          "textfield",
          "searchfield",
          "textarea",
          "push-button",
          "slider-horizontal",
          "checkbox",
          "radio",
          "square-button",
          "menulist",
          "listbox",
          "meter",
          "progress-bar",
          "scrollbarbutton-up",
          "button-bevel",
          "media-mute-button",
          "caret",
          "inherit",
          "initial",
          "revert",
          "revert-layer",
          "unset",
        ],
        (x) => ({ appearance: x })
      ),
    }),
  };
};
