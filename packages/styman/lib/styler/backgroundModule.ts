import { ColorScheme, Modifiers, withValues } from "../dynamic";
import { toRgb } from "../utils";
import { BuildContext } from "./createStyler";

export const backgroundModule = <C extends ColorScheme, M extends Modifiers>({
  colors,
  withModifiers,
  withColors,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("back", {
      ...withValues(["fixed", "local", "scroll"], (x) => ({
        backgroundAttachment: x,
      })),
      ...withValues(
        {
          "clip-border": "border-box",
          "clip-padding": "padding-box",
          "clip-content": "content-box",
          "clip-text": "text",
        },
        (x) => ({
          backgroundClip: x,
        })
      ),
      ...withValues(
        {
          "origin-border": "border-box",
          "origin-padding": "padding-box",
          "origin-content": "content-box",
        },
        (x) => ({
          backgroundOrigin: x,
        })
      ),
      ...withValues(
        {
          inherit: "inherit",
          current: "currentColor",
        },
        (x) => ({ backgroundColor: x })
      ),
      ...withValues(
        {
          bottom: "bottom",
          center: "center",
          left: "left",
          "left-bottom": "left bottom",
          "left-top": "left top",
          right: "right",
          "right-bottom": "right bottom",
          "right-top": "right top",
          top: "top",
        },
        (x) => ({ backgroundPosition: x })
      ),
      ...withValues(
        {
          repeat: "repeat",
          "no-repeat": "no-repeat",
          "repeat-x": "repeat-x",
          "repeat-y": "repeat-y",
          "repeat-round": "round",
          "repeat-space": "space",
        },
        (x) => ({ backgroundRepeat: x })
      ),
      ...withValues(["auto", "cover", "contain"], (x) => ({
        backgroundSize: x,
      })),
      ...withValues(
        {
          none: "none",
          "gradient-to-t": "linear-gradient(to top, var(--sm-gradient-stops))",
          "gradient-to-tl":
            "linear-gradient(to top left, var(--sm-gradient-stops))",
          "gradient-to-l": "linear-gradient(to left, var(--sm-gradient-stops))",
          "gradient-to-bl":
            "linear-gradient(to bottom left, var(--sm-gradient-stops))",
          "gradient-to-b":
            "linear-gradient(to bottom, var(--sm-gradient-stops))",
          "gradient-to-br":
            "linear-gradient(to bottom right, var(--sm-gradient-stops))",
          "gradient-to-r":
            "linear-gradient(to right, var(--sm-gradient-stops))",
          "gradient-to-tr":
            "linear-gradient(to top right, var(--sm-gradient-stops))",
        },
        (x) => ({ backgroundImage: x })
      ),
      $custom: withColors(colors, (color, { withSides }) =>
        withSides("background", (name) => ({ [name]: color }))
      ),
    }),
    ...withModifiers("from", {
      inherit: () => ({
        "--sm-gradient-from": "inherit",
        "--sm-gradient-stops":
          "var(--sm-gradient-from), var(--sm-gradient-to, rgb(255 255 255 / 0))",
      }),
      current: () => ({
        "--sm-gradient-from": "currentColor",
        "--sm-gradient-stops":
          "var(--sm-gradient-from), var(--sm-gradient-to, rgb(255 255 255 / 0))",
      }),
      $custom: withColors(colors, (color) => ({
        "--sm-gradient-from": color,
        "--sm-gradient-stops": `var(--sm-gradient-from), var(--sm-gradient-to, ${toRgb(
          color,
          " / 0",
          "rgb(255 255 255 / 0)"
        )})`,
      })),
    }),
    ...withModifiers("to", {
      inherit: () => ({ "--sm-gradient-to": "inherit" }),
      current: () => ({ "--sm-gradient-to": "currentColor" }),
      $custom: withColors(colors, (color) => ({ "--sm-gradient-to": color })),
    }),
    ...withModifiers("via", {
      inherit: () => ({
        "--sm-gradient-stops":
          "var(--sm-gradient-from), inherit, var(--sm-gradient-to, rgb(255 255 255 / 0))",
      }),
      current: () => ({
        "--sm-gradient-stops":
          "var(--sm-gradient-from), currentColor, var(--sm-gradient-to, rgb(255 255 255 / 0))",
      }),
      $custom: withColors(colors, (color) => ({
        "--sm-gradient-stops": `var(--sm-gradient-from), ${color}, var(--sm-gradient-to, ${toRgb(
          color,
          " / 0",
          "rgb(255 255 255 / 0)"
        )})`,
      })),
    }),
  };
};
