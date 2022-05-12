import { withColors, withVariants, createSwatch } from "./dynamic";

test("withVariants", () => {
  const colors = withColors(
    {
      black: createSwatch("black"),
      white: createSwatch("white"),
    },
    (color, context) =>
      context.withSides(
        (side) => `border${side}Color`,
        (name) => ({ [name]: color }),
        () => ({ borderColor: color })
      )
  );

  const variants = withVariants({
    $sides: () => true,
    $custom: colors,
    bordered: (_, { withSides }) => ({
      ...withSides(
        (x) => `border${x}Width`,
        (prop) => ({ [prop]: 1 }),
        () => ({ borderWidth: 1 })
      ),
    }),
    solid: (_, { withSides }) => ({
      ...withSides(
        (x) => `border${x}Style`,
        (prop) => ({ [prop]: "solid" }),
        () => ({ borderStyle: "solid" })
      ),
    }),
  });
  // single variant
  expect(variants("bordered")).toEqual({ borderWidth: 1 });
  // no side but passing array of variant
  expect(variants(["bordered"])).toEqual({ borderWidth: 1 });
  // single side
  expect(variants(["L", "bordered"])).toEqual({ borderLeftWidth: 1 });
  // multiple sides
  expect(variants([["L", "R"], "bordered"])).toEqual({
    borderLeftWidth: 1,
    borderRightWidth: 1,
  });
  // contains falsy value
  expect(variants([["L", undefined, "R"], "bordered"])).toEqual({
    borderLeftWidth: 1,
    borderRightWidth: 1,
  });
  // no side style first, then has side style
  expect(variants(["bordered", "L", "solid"])).toEqual({
    borderWidth: 1,
    borderLeftStyle: "solid",
  });
  // using vertical and horizontal sides
  expect(variants(["H", "bordered"])).toEqual({
    borderLeftWidth: 1,
    borderRightWidth: 1,
  });
  expect(variants(["V", "bordered"])).toEqual({
    borderTopWidth: 1,
    borderBottomWidth: 1,
  });

  expect(variants(["black"])).toEqual({
    borderColor: "black",
  });

  expect(variants(["black-200"])).toEqual({
    borderColor: "black",
  });

  expect(variants([["L", "T"], "black-200"])).toEqual({
    borderLeftColor: "black",
    borderTopColor: "black",
  });
});
