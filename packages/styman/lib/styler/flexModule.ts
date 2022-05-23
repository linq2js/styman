import { ColorScheme, Modifiers, withValues } from "../dynamic";
import { BuildContext } from "./createStyler";

const GAP_KEYMAP = {
  g: "gap",
  gx: "columnGap",
  gy: "rowGap",
};

export const flexModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("flex", {
      "1": () => ({ display: "flex", flex: "1 1 0%" }),
      none: () => ({ display: "flex", flex: "none" }),
      auto: () => ({ display: "flex", flex: "1 1 auto" }),
      initial: () => ({ display: "flex", flex: "0 1 auto" }),
      inline: () => ({ display: "inline-flex" }),
      $number: (x: number) => ({ flex: x }),
      $default: () => ({ display: "flex" }),
      ...withValues(
        {
          row: "row",
          "row-reverse": "row-reverse",
          col: "column",
          "col-reverse": "column-reverse",
        },
        (x) => ({
          display: "flex",
          flexDirection: x,
        })
      ),
      ...withValues(["wrap", "wrap-reverse", "nowrap"], (x) => ({
        flexWrap: x,
      })),
    }),
    ...withModifiers("basis", {
      auto: () => ({ flexBasis: "auto" }),
      full: () => ({ flexBasis: "100%" }),
      px: () => ({ flexBasis: "1px" }),
      $number: (value: number) => ({ flexBasis: `${value / 4}rem` }),
      $fraction: ([a, b]) => `${(a / b) * 100}%`,
    }),
    ...withModifiers("grow", {
      $default: () => ({ flexGrow: 1 }),
      $number: (value: number) => ({ flexGrow: value }),
    }),
    ...withModifiers("shrink", {
      $default: () => ({ flexShrink: 1 }),
      $number: (value: number) => ({ flexShrink: value }),
    }),
    ...withModifiers("order", {
      first: () => ({ order: -9999 }),
      last: () => ({ order: 9999 }),
      none: () => ({ order: 0 }),
      $number: (value: number) => ({ order: value }),
    }),
    ...withModifiers("grid", {
      inline: () => ({ display: "inline-grid" }),
      $default: () => ({ display: "grid" }),
      ...withValues(
        {
          row: "row",
          col: "column",
          "row-dense": "row dense",
          "col-dense": "column dense",
        },
        (x) => ({ gridAutoFlow: x })
      ),
    }),
    ...withModifiers("cols", {
      none: () => ({ gridTemplateColumns: "none" }),
      $number: (x: number) => ({
        gridTemplateColumns: `repeat(${x}, minmax(0, 1fr))`,
      }),
      ...withValues(
        {
          auto: "auto",
          min: "min-content",
          max: "max-content",
          fr: "minmax(0, 1fr)",
        },
        (x) => ({ gridAutoColumns: x })
      ),
    }),
    ...withModifiers("rows", {
      none: () => ({ gridTemplateRows: "none" }),
      $number: (x: number) => ({
        gridTemplateRows: `repeat(${x}, minmax(0, 1fr))`,
      }),
      ...withValues(
        {
          auto: "auto",
          min: "min-content",
          max: "max-content",
          fr: "minmax(0, 1fr)",
        },
        (x) => ({ gridAutoRows: x })
      ),
    }),
    // col
    ...withModifiers("col", {
      auto: () => ({ gridColumn: "auto" }),
      full: () => ({ gridColumn: " 1 / -1" }),
      $number: (value: number) => ({
        gridColumn: `span ${value} / span ${value}`,
      }),
    }),
    ...withModifiers("col_start", {
      auto: () => ({ gridColumnStart: "auto" }),
      $number: (x: number) => ({ gridColumnStart: x }),
    }),
    ...withModifiers("col_end", {
      auto: () => ({ gridColumnEnd: "auto" }),
      $number: (x: number) => ({ gridColumnEnd: x }),
    }),

    // row
    ...withModifiers("row", {
      auto: () => ({ gridRow: "auto" }),
      full: () => ({ gridRow: " 1 / -1" }),
      $number: (x: number) => ({ gridRow: `span ${x} / span ${x}` }),
    }),
    ...withModifiers("row_start", {
      auto: () => ({ gridRowStart: "auto" }),
      $number: (value: number) => ({ gridRowStart: value }),
    }),
    ...withModifiers("row_end", {
      auto: () => ({ gridRowEnd: "auto" }),
      $number: (x: number) => ({ gridRowEnd: x }),
    }),

    ...withModifiers(["g", "gx", "gy"], {
      px: (_, { withKey }) =>
        withKey(GAP_KEYMAP, (prop) => ({ [prop]: "1px" })),
      $number: (x: number, { withKey }) =>
        withKey(GAP_KEYMAP, (prop) => ({ [prop]: `${x / 4}rem` })),
    }),

    ...withModifiers("justify", {
      ...withValues(
        {
          start: "flex-start",
          end: "flex-end",
          center: "center",
          between: "space-between",
          around: "space-around",
          evenly: "space-evenly",
        },
        (x) => ({ justifyContent: x })
      ),
    }),
    ...withModifiers("justify_items", {
      ...withValues(["start", "end", "center", "stretch"], (x) => ({
        justifyItems: x,
      })),
    }),

    ...withModifiers("justify_self", {
      ...withValues(["auto", "start", "end", "center", "stretch"], (x) => ({
        justifySelf: x,
      })),
    }),

    ...withModifiers("content", {
      ...withValues(
        {
          start: "flex-start",
          end: "flex-end",
          center: "center",
          between: "space-between",
          around: "space-around",
          evenly: "space-evenly",
        },
        (x) => ({ alignContent: x })
      ),
    }),

    // align-items
    ...withModifiers("items", {
      ...withValues(["start", "end", "center", "stretch", "baseline"], (x) => ({
        alignItems: x,
      })),
    }),

    // align-self
    ...withModifiers("self", {
      ...withValues(
        ["auto", "start", "end", "center", "stretch", "baseline"],
        (x) => ({ alignSelf: x })
      ),
    }),

    // place-content
    ...withModifiers("place_content", {
      ...withValues(
        {
          start: "start",
          end: "end",
          center: "center",
          stretch: "stretch",
          between: "space-between",
          around: "space-around",
          evenly: "space-evenly",
        },
        (x) => ({ placeContent: x })
      ),
    }),

    // place-items https://tailwindcss.com/docs/place-items
    ...withModifiers("place_items", {
      ...withValues(
        {
          start: "start",
          end: "end",
          center: "center",
          stretch: "stretch",
        },
        (x) => ({ placeItems: x })
      ),
    }),

    // place-self https://tailwindcss.com/docs/place-self
    ...withModifiers("place_self", {
      ...withValues(
        {
          auto: "auto",
          start: "start",
          end: "end",
          center: "center",
          stretch: "stretch",
        },
        (x) => ({ placeSelf: x })
      ),
    }),

    ...withModifiers("center", {
      $number: (x: number) => getCenter(x, x),
      $fraction: ([w, h]) => getCenter(w, h),
      $default: () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
      ...withValues(
        { x: { justifyContent: "center" }, y: { alignItems: "center" } },
        (x) => ({ display: "flex", ...x })
      ),
    }),
  };
};

const getCenter = (width: number, height: number) => {
  return {
    marginLeft: `${-width / 8}rem`,
    marginTop: `${-height / 8}rem`,
    width: `${width / 4}rem`,
    height: `${height / 4}rem`,
  };
};
