import {
  withColors,
  withVariants,
  createSwatch,
  withModifiers,
} from "./dynamic";
import { sheet } from "./main";

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
  expect(variants([["L", "--", "R"], "bordered"])).toEqual({
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

test("lazy styles", () => {
  let runCount = 0;
  const styles = sheet({ primary: { color: "red" } });
  const cachedStyles = styles(() => {
    runCount++;
    return { primary: true };
  });
  expect(runCount).toBe(0);
  expect(cachedStyles(false)).toBe("css-0");
  expect(runCount).toBe(0);
  expect(cachedStyles(true)).toBe("css-tokvmb");
  expect(runCount).toBe(1);
  expect(cachedStyles(true)).toBe("css-tokvmb");
  expect(runCount).toBe(1);
});
