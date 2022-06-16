import {
  createPreset,
  ColorScheme,
  Modifiers,
  TextSizes,
  defaultTextSizes,
  Spacings,
} from "../dynamic";
import { RuleSet, sheet } from "../main";

export interface StylerOptions<
  TModifiers extends Record<string, string>,
  TColors extends ColorScheme,
  TResult,
  TTextSizes extends TextSizes,
  TSpacings extends Record<string, number>
> {
  modifiers?: TModifiers;
  textSizes?: TTextSizes;
  colors?: TColors;
  spacings?: TSpacings;
  build: (
    context: BuildContext<TColors, TModifiers, TTextSizes, TSpacings>
  ) => TResult;
}

/**
 * This is the trick to get ReturnType of generic function
 */
class CreatePresetWrappedType<T extends Modifiers> {
  type() {
    return createPreset<T>();
  }
}

export type BuildContext<
  TColors extends ColorScheme,
  TModifiers extends Modifiers,
  TTextSizes extends TextSizes,
  TSpacings extends Spacings
> = {
  colors: TColors;
  spacings: TSpacings;
  modifiers: TModifiers;
  textSizes: TTextSizes;
} & ReturnType<CreatePresetWrappedType<TModifiers>["type"]>;

export const createStyler = <
  TModifiers extends Record<string, string>,
  TColors extends ColorScheme,
  TRuleSet extends RuleSet,
  TTextSizes extends TextSizes,
  TSpacings extends Record<string, number> = {}
>({
  modifiers,
  textSizes = defaultTextSizes as any,
  colors = {} as any,
  spacings = {} as any,
  build,
}: StylerOptions<TModifiers, TColors, TRuleSet, TTextSizes, TSpacings>) => {
  const context = createPreset({ modifiers });
  const buildResult = build({ ...context, colors, spacings, textSizes });
  const styler = sheet(buildResult);
  return Object.assign(styler, {
    propsBuilder(...args: Parameters<typeof styler>) {
      return { className: styler(...args) };
    },
  });
};
