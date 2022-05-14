import {
  createSwatch,
  withColors,
  withModifiers,
  withValues,
  withVariants,
} from ".";
import { sheet } from "../main";
// import { sheet } from "../main";

test("ignore specified side variants", () => {
  const variants = withVariants({
    $sides: () => true,
    ...withValues({ v1: 1, v2: 2, v3: 3 }, (v, c) =>
      c.withSides("border", (name) => ({ [name]: v }))
    ),
  });
  expect(
    variants(["L", "v1", "--", "v2", "R", "v2", ["--", "B"], "v3"])
  ).toEqual({
    borderLeft: 1,
    borderRight: 2,
    borderBottom: 3,
  });
});

test("combine handler", () => {
  const variants = withVariants({
    $custom: withColors({ black: createSwatch("black") }, (x) => ({
      color: x,
    }))
      .combineWith(/^offset-\d+$/, (pattern: `offset-${number}`) => ({
        pattern,
      }))
      .combineWith(/^:+/, (selector: ":first" | ":last") => ({ selector })),
  });
  expect(variants("black")).toEqual({ color: "black" });
  expect(variants("offset-100")).toEqual({ pattern: "offset-100" });
  expect(variants(":first")).toEqual({ selector: ":first" });
});

test("withModifiers", () => {
  const modifiers = withModifiers("border1", {
    solid: () => ({ border: "solid" }),
  });
  sheet({ ...modifiers });
  expect(modifiers.border1({ "2xl": { active: "solid" } })).toEqual({
    "@media (min-width: 1536px)": { "&:active": { border: "solid" } },
  });

  expect(
    modifiers.border1({
      active: "solid",
      "2xl": { active: "solid", $: "solid" },
    })
  ).toEqual({
    "@media (min-width: 1536px)": {
      border: "solid",
      "&:active": { border: "solid" },
    },
    "&:active": { border: "solid" },
  });
});

test("xy", () => {
  const variants = withVariants({
    px: (_, { withSides }) => {
      return withSides(
        false,
        (side) => ({ [side === "X" ? "columnGap" : "rowGap"]: "1px" }),
        () => ({ gap: "1px" })
      );
    },
    $xy: () => true,
    $number: (x: number, { withSides }) => {
      return withSides(
        false,
        (side) => ({
          [side === "X" ? "columnGap" : "rowGap"]: `${x / 4}rem`,
        }),
        () => ({ gap: `${x / 4}rem` })
      );
    },
  });
  expect(variants(["X", 1])).toEqual({ columnGap: "0.25rem" });
});
