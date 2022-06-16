import {
  ColorScheme,
  defaultModifiers,
  meta,
  Modifiers,
  Side,
  Spacings,
  TextSizes,
} from "../dynamic";
import { BuildContext } from "./createStyler";

const getInset = (sides: Side[] | undefined, value: string) => {
  const hasLeft = sides?.includes("L");
  const hasRight = sides?.includes("R");
  const hasBottom = sides?.includes("B");
  const hasTop = sides?.includes("T");

  if (hasLeft && hasRight && !hasBottom && !hasTop)
    return { left: value, right: value };

  if (hasTop && hasBottom && !hasLeft && !hasRight)
    return { top: value, bottom: value };

  if (hasLeft && !hasBottom && !hasTop && !hasRight) {
    return { left: 0, top: 0, bottom: 0, width: value };
  }
  if (!hasLeft && !hasBottom && !hasTop && hasRight) {
    return { right: 0, top: 0, bottom: 0, width: value };
  }
  if (!hasLeft && hasBottom && !hasTop && !hasRight) {
    return { right: 0, bottom: 0, left: 0, height: value };
  }
  if (hasLeft && hasBottom && hasTop && !hasRight) {
    return { right: 0, top: 0, left: 0, height: value };
  }

  return {
    left: value,
    top: value,
    right: value,
    bottom: value,
  };
};

export const layoutModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  modifiers = defaultModifiers as any,
  withModifiers,
  withValues,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("aspect", {
      $custom: (x: string) => ({ aspectRatio: x }),
      ...withValues(
        { auto: "auto", squared: "1 / 1", video: "16 / 9" },
        (x) => ({
          aspectRatio: x,
        })
      ),
    }),

    ...withModifiers(["left", "top", "right", "bottom"], {
      $fraction: ([a, b], { key }) => ({ [key!]: `${(a / b) * 100}%` }),
      $number: (x: number, { key }) => ({ [key!]: `${x / 4}rem` }),
    }),

    ...withModifiers("inset", {
      $sides: () => true,
      $fraction: ([a, b], { sides }) => {
        const value = `${(a / b) * 100}%`;
        return getInset(sides, value);
      },
      $number: (x: number, { sides }) => {
        const value = `${x / 4}rem`;
        return getInset(sides, value);
      },
    }),
    ...withModifiers("visible", {
      $default: () => ({ visibility: "visible" }),
    }),
    ...withModifiers("invisible", {
      $default: () => ({ visibility: "hidden" }),
    }),
    ...withModifiers("static", () => ({ position: "static" })),
    ...withModifiers("fixed", () => ({ position: "fixed" })),
    ...withModifiers("absolute", () => ({ position: "absolute" })),
    ...withModifiers("relative", () => ({ position: "relative" })),
    ...withModifiers("sticky", () => ({ position: "sticky" })),
    ...withModifiers("zindex", {
      auto: () => ({ zIndex: "auto" }),
      $number: (x: number) => ({ zIndex: x }),
    }),
    ...withModifiers("overscroll", {
      $xy: () => true,
      ...withValues(["auto", "contain", "none"], (x, { withSides }) =>
        withSides(
          false,
          (side) => ({
            [side === "X" ? "overscrollBehaviorX" : "overscrollBehaviorY"]: x,
          }),
          () => ({ overscrollBehavior: x })
        )
      ),
    }),
    ...withModifiers("overflow", {
      $xy: () => true,
      ...withValues(
        ["auto", "hidden", "clip", "visible", "scroll"],
        (x, { withSides }) =>
          withSides(
            false,
            (side) => ({
              [side === "X" ? "overflowX" : "overflowY"]: x,
            }),
            () => ({ overflow: x })
          )
      ),
    }),
    ...withModifiers("object", {
      $param: meta(
        (
          values: // object-position
          (
            | "center"
            | "left"
            | "top"
            | "bottom"
            | "right"
            // object-fit
            | "contain"
            | "cover"
            | "fill"
            | "none"
            | "scale-down"
            | string
          )[]
        ) => {
          let fit: string | undefined;
          const position: string[] = [];
          values.forEach((x) => {
            if (
              x === "left" ||
              x === "top" ||
              x === "right" ||
              x === "center" ||
              x === "bottom"
            ) {
              position.push(x);
            } else {
              fit = x;
            }
          });
          if (fit && position.length) {
            return {
              objectFit: fit as any,
              objectPosition: position.join(" "),
            };
          }
          if (fit) {
            return { objectFit: fit as any };
          }
          return { objectPosition: position.join(" ") };
        },
        {
          variants: () => [
            "center",
            "left",
            "top",
            "bottom",
            "right",
            "contain",
            "cover",
            "fill",
            "none",
            "scale-down",
            "string",
          ],
        }
      ),
    }),
    ...withModifiers("isolate", {
      $default: () => ({ isolation: "isolate" }),
      auto: () => ({ isolation: "auto" }),
    }),
    ...withModifiers("clear", {
      ...withValues(["left", "right", "both", "none"], (x) => ({ clear: x })),
    }),
    ...withModifiers("float", {
      ...withValues(["left", "right", "none"], (x) => ({ float: x })),
    }),
    ...withModifiers("block", { $default: () => ({ display: "block" }) }),
    ...withModifiers("inline", { $default: () => ({ display: "inline" }) }),
    ...withModifiers("contents", { $default: () => ({ display: "contents" }) }),
    ...withModifiers("hidden", { $default: () => ({ display: "hidden" }) }),
    ...withModifiers("list_item", {
      $default: () => ({ display: "list-item" }),
    }),
    ...withModifiers("flow_root", {
      $default: () => ({ display: "flow-root" }),
    }),
    ...withModifiers("inline_block", {
      $default: () => ({ display: "inline-block" }),
    }),
    ...withModifiers("box", {
      ...withValues({ border: "border-box", content: "content-box" }, (x) => ({
        boxSizing: x,
      })),
    }),
    ...withModifiers("box_decoration", {
      ...withValues(["clone", "slice"], (x) => ({ boxDecorationBreak: x })),
    }),
    ...withModifiers("break_inside", {
      ...withValues(["auto", "avoid", "avoid-page", "avoid-column"], (x) => ({
        breakInside: x,
      })),
    }),
    ...withModifiers("break_before", {
      ...withValues(
        [
          "auto",
          "avoid",
          "avoid-page",
          "all",
          "page",
          "left",
          "right",
          "column",
        ],
        (x) => ({ breakBefore: x })
      ),
    }),
    ...withModifiers("break_after", {
      ...withValues(
        [
          "auto",
          "avoid",
          "avoid-page",
          "all",
          "page",
          "left",
          "right",
          "column",
        ],
        (x) => ({ breakAfter: x })
      ),
    }),
    ...withModifiers("columns", {
      auto: () => ({ columns: "auto" }),
      $number: (x: number) => ({ columns: x }),
      ...withValues(
        {
          "3xs": "16rem",
          "2xs": "18rem",
          xs: "20rem",
          sm: "24rem",
          md: "28rem",
          lg: "32rem",
          xl: "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "7xl": "80rem",
        },
        (x) => ({ columns: x })
      ),
    }),
    container: () => ({
      width: "100%",
      [modifiers.sm]: { maxWidth: "640px" },
      [modifiers.md]: { maxWidth: "768px" },
      [modifiers.lg]: { maxWidth: "1024px" },
      [modifiers.xl]: { maxWidth: "1280px" },
      [modifiers["2xl"]]: { maxWidth: "1536px" },
    }),
    ...withModifiers("outline", {
      none: () => ({ outline: "2px solid transparent", outlineOffset: "2px" }),
      $default: () => ({ outline: "solid" }),
      $number: (x: number) => ({ outlineWidth: `${x}px` }),
      ...withValues(["dotted", "hidden", "solid", "dashed", "double"], (x) => ({
        outlineStyle: x,
      })),
      ...withValues({ inherit: "inherit", current: "currentColor" }, (x) => ({
        outlineColor: x,
      })),
    }),
    ...withModifiers("outline_offset", {
      $number: (x: number) => ({ outlineOffset: `${x}px` }),
    }),
  };
};
