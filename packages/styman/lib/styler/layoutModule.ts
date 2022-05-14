import { ColorScheme, defaultModifiers, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const layoutModule = <C extends ColorScheme, M extends Modifiers>({
  modifiers = defaultModifiers as any,
  withModifiers,
  withValues,
}: BuildContext<C, M>) => {
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
    ...withModifiers("left", {
      $fraction: ([a, b]) => ({ left: `${a / b}%` }),
      $number: (x: number) => ({ left: `${x / 4}rem` }),
    }),
    ...withModifiers("top", {
      $fraction: ([a, b]) => ({ top: `${a / b}%` }),
      $number: (x: number) => ({ top: `${x / 4}rem` }),
    }),
    ...withModifiers("right", {
      $fraction: ([a, b]) => ({ right: `${a / b}%` }),
      $number: (x: number) => ({ right: `${x / 4}rem` }),
    }),
    ...withModifiers("bottom", {
      $fraction: ([a, b]) => ({ bottom: `${a / b}%` }),
      $number: (x: number) => ({ bottom: `${x / 4}rem` }),
    }),
    ...withModifiers("inset", {
      $xy: () => true,
      $fraction: ([a, b], { withSides }) =>
        withSides(
          false,
          (side) =>
            side === "X"
              ? { left: `${a / b}%`, right: `${a / b}%` }
              : { top: `${a / b}%`, bottom: `${a / b}%` },
          () => ({
            left: `${a / b}%`,
            top: `${a / b}%`,
            right: `${a / b}%`,
            bottom: `${a / b}%`,
          })
        ),
      $number: (x: number, { withSides }) =>
        withSides(
          false,
          (side) =>
            side === "X"
              ? { left: `${x / 4}rem`, right: `${x / 4}rem` }
              : { top: `${x / 4}rem`, bottom: `${x / 4}rem` },
          () => ({
            left: `${x / 4}rem`,
            top: `${x / 4}rem`,
            right: `${x / 4}rem`,
            bottom: `${x / 4}rem`,
          })
        ),
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
    ...withModifiers("z", {
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
      $param: (
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
  };
};
