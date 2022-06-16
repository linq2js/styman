import { keyframes } from "@emotion/css";
import { ColorScheme, Modifiers, Spacings, TextSizes } from "../dynamic";
import { once } from "../utils";
import { BuildContext } from "./createStyler";

const ANIMATION_TYPES = {
  none: once(() => ({ animation: "none" })),
  spin: once(() => ({
    animation: `${keyframes({
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    })} 1s linear infinite`,
  })),
  ping: once(() => ({
    animation: `${keyframes({
      "75%, 100%": { transform: "scale(2)", opacity: 0 },
    })} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
  })),
  pulse: once(() => ({
    animation: `${keyframes({
      "0%, 100%": { opacity: 1 },
      "50%": { opacity: 0.5 },
    })} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  })),
  bounce: once(() => ({
    animation: `${keyframes({
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
      },
      "50%": {
        transform: "translateY(0)",
        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      },
    })} 1s infinite`,
  })),
};

export const animationModule = <
  C extends ColorScheme,
  M extends Modifiers,
  T extends TextSizes,
  S extends Spacings
>({
  withModifiers,
}: BuildContext<C, M, T, S>) => {
  return {
    ...withModifiers("animate", {
      ...ANIMATION_TYPES,
    }),
  };
};
