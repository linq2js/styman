import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

const FILTER =
  "var(--sm-blur,) var(--sm-brightness,) var(--sm-contrast,) var(--sm-grayscale,) var(--sm-hue-rotate,) var(--sm-invert,) var(--sm-saturate,) var(--sm-sepia,) var(--sm-drop-shadow,)";

const BACKDROP_FILTER =
  "var(--sm-backdrop-blur,) var(--sm-backdrop-brightness,) var(--sm-backdrop-contrast,) var(--sm-backdrop-grayscale,) var(--sm-backdrop-hue-rotate,) var(--sm-backdrop-invert,) var(--sm-backdrop-opacity,) var(--sm-backdrop-saturate,) var(--sm-backdrop-sepia,)";

const getFilter = (
  name:
    | "blur"
    | "brightness"
    | "contrast"
    | "grayscale"
    | "hue-rotate"
    | "saturate"
    | "sepia"
    | "drop-shadow"
    | "invert"
    | "opacity",

  value: string | number,
  backdrop = false
) =>
  backdrop
    ? {
        [`--sm-backdrop-${name}`]: value,
        backdropFilter: BACKDROP_FILTER,
      }
    : {
        [`--sm-${name}`]: value,
        filter: FILTER,
      };

export const filterModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("blur", {
      ...withValues(
        {
          none: "blur(0)",
          $default: "blur(8px)",
          sm: "blur(4px)",
          md: "blur(12px)",
          lg: "blur(16px)",
          xl: "blur(24px)",
          "2xl": "blur(40px)",
          "3xl": "blur(64px)",
        },
        (x) => getFilter("blur", x)
      ),
      $number: (x: number) => getFilter("blur", `blur(${x}px)`),
    }),
    ...withModifiers("brightness", {
      $number: (x: number) => getFilter("brightness", `brightness(${x / 100})`),
    }),
    ...withModifiers("contrast", {
      $number: (x: number) => getFilter("contrast", `contrast(${x / 100})`),
    }),
    ...withModifiers("grayscale", {
      $default: () => getFilter("grayscale", `grayscale(100%)`),
      $number: (x: number) => getFilter("grayscale", `grayscale(${x}%)`),
    }),
    ...withModifiers("invert", {
      $default: () => getFilter("invert", `grayscale(100%)`),
      $number: (x: number) => getFilter("invert", `invert(${x}%)`),
    }),
    ...withModifiers("hue_rotate", {
      $number: (x: number) => getFilter("hue-rotate", `hue-rotate(${x}deg)`),
    }),
    ...withModifiers("saturate", {
      $number: (x: number) => getFilter("saturate", `saturate(${x / 100})`),
    }),
    ...withModifiers("sepia", {
      $default: () => getFilter("sepia", `sepia(100%)`),
      $number: (x: number) => getFilter("sepia", `sepia(${x}%)`),
    }),
    ...withModifiers("drop_shadow", {
      ...withValues(
        {
          $default:
            "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
          sm: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
          md: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
          lg: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
          xl: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
          "2xl": "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
          none: "drop-shadow(0 0 #0000)",
        },
        (x) => getFilter("drop-shadow", x)
      ),
    }),
    // backdrop filters
    ...withModifiers("backdrop_blur", {
      ...withValues(
        {
          none: "blur(0)",
          $default: "blur(8px)",
          sm: "blur(4px)",
          md: "blur(12px)",
          lg: "blur(16px)",
          xl: "blur(24px)",
          "2xl": "blur(40px)",
          "3xl": "blur(64px)",
        },
        (x) => getFilter("blur", x, true)
      ),
      $number: (x: number) => getFilter("blur", `blur(${x}px)`, true),
    }),
    ...withModifiers("backdrop_brightness", {
      $number: (x: number) =>
        getFilter("brightness", `brightness(${x / 100})`, true),
    }),
    ...withModifiers("backdrop_contrast", {
      $number: (x: number) =>
        getFilter("contrast", `contrast(${x / 100})`, true),
    }),
    ...withModifiers("backdrop_grayscale", {
      $default: () => getFilter("grayscale", `grayscale(100%)`, true),
      $number: (x: number) => getFilter("grayscale", `grayscale(${x}%)`, true),
    }),
    ...withModifiers("backdrop_invert", {
      $default: () => getFilter("invert", `grayscale(100%)`, true),
      $number: (x: number) => getFilter("invert", `invert(${x}%)`, true),
    }),
    ...withModifiers("backdrop_hue_rotate", {
      $number: (x: number) =>
        getFilter("hue-rotate", `hue-rotate(${x}deg)`, true),
    }),
    ...withModifiers("backdrop_saturate", {
      $number: (x: number) =>
        getFilter("saturate", `saturate(${x / 100})`, true),
    }),
    ...withModifiers("backdrop_opacity", {
      $number: (x: number) => getFilter("opacity", `opacity(${x / 100})`, true),
    }),
    ...withModifiers("backdrop_sepia", {
      $default: () => getFilter("sepia", `sepia(100%)`, true),
      $number: (x: number) => getFilter("sepia", `sepia(${x}%)`, true),
    }),
  };
};
