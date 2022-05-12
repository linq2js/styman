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
  expect(modifiers.border1("solid")).toEqual({ border: "solid" });
});
