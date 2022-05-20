import { ColorScheme, meta, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

const TRANSFORM =
  "translate(var(--sm-translate-x,0),var(--sm-translate-y,0)) rotate(var(--sm-rotate,0)) skewX(var(--sm-skew-x,0)) skewY(var(--sm-skew-y,0)) scaleX(var(--sm-scale-x,1)) scaleY(var(--sm-scale-y,1))";

export const transformModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("scale", {
      $xy: () => true,
      $number: (x: number, { withSides }) =>
        withSides(
          false,
          (side) => ({
            [side === "X" ? "--sm-scale-x" : "--sm-scale-y"]: `${x / 100}`,
            transform: TRANSFORM,
          }),
          () => ({
            "--sm-scale-x": `${x / 100}`,
            "--sm-scale-y": `${x / 100}`,
            transform: TRANSFORM,
          })
        ),
    }),
    ...withModifiers("skew", {
      $xy: () => true,
      $number: (x: number, { withSides }) =>
        withSides(
          false,
          (side) => ({
            [side === "X" ? "--sm-skew-x" : "--sm-skew-y"]: `${x}deg`,
            transform: TRANSFORM,
          }),
          () => ({
            "--sm-skew-x": `${x}deg`,
            "--sm-skew-y": `${x}deg`,
            transform: TRANSFORM,
          })
        ),
    }),
    ...withModifiers("translate", {
      px: (_, { withSides }) =>
        withSides(
          false,
          (side) => ({
            [side === "X" ? "--sm-translate-x" : "--sm-translate-y"]: `1px`,
            transform: TRANSFORM,
          }),
          () => ({
            "--sm-translate-x": `1px`,
            "--sm-translate-y": `1px`,
            transform: TRANSFORM,
          })
        ),
      full: (_, { withSides }) =>
        withSides(
          false,
          (side) => ({
            [side === "X" ? "--sm-translate-x" : "--sm-translate-y"]: `100%`,
            transform: TRANSFORM,
          }),
          () => ({
            "--sm-translate-x": `100%`,
            "--sm-translate-y": `100%`,
            transform: TRANSFORM,
          })
        ),
      $xy: () => true,
      $fraction: ([a, b], { withSides }) => {
        const value = `${(a / b) * 100}%`;
        return withSides(
          false,
          (side) => ({
            [side === "X" ? "--sm-translate-x" : "--sm-translate-y"]: value,
            transform: TRANSFORM,
          }),
          () => ({
            "--sm-translate-x": value,
            "--sm-translate-y": value,
            transform: TRANSFORM,
          })
        );
      },
      $number: (x: number, { withSides }) =>
        withSides(
          false,
          (side) => ({
            [side === "X" ? "--sm-translate-x" : "--sm-translate-y"]: `${
              x / 4
            }rem`,
            transform: TRANSFORM,
          }),
          () => ({
            "--sm-translate-x": `${x / 4}rem`,
            "--sm-translate-y": `${x / 4}rem`,
            transform: TRANSFORM,
          })
        ),
    }),
    ...withModifiers("rotate", {
      $number: (x: number) => ({
        "--sm-rotate": `${x}deg`,
        transform: TRANSFORM,
      }),
    }),
    ...withModifiers("origin", {
      $param: meta(
        (values: ("center" | "left" | "top" | "bottom" | "right")[]) => {
          return { transformOrigin: values.join(" ") };
        },
        () => ["center", "left", "top", "bottom", "right"]
      ),
    }),
  };
};
