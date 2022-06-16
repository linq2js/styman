import { createPreset, ColorScheme, Modifiers } from "../dynamic";
import { RuleSet, sheet } from "../main";

export interface StylerOptions<
  TModifiers extends Record<string, string>,
  TColors extends ColorScheme,
  TResult,
  TSpacings extends Record<string, number>
> {
  modifiers?: TModifiers;
  colors?: TColors;
  spacings?: TSpacings;
  build: (context: BuildContext<TColors, TModifiers, TSpacings>) => TResult;
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
  TSpacings extends Record<string, number> = {}
> = {
  colors: TColors;
  spacings: TSpacings;
  modifiers: TModifiers;
} & ReturnType<CreatePresetWrappedType<TModifiers>["type"]>;

export const createStyler = <
  TModifiers extends Record<string, string>,
  TColors extends ColorScheme,
  TRuleSet extends RuleSet,
  TSpacings extends Record<string, number> = {}
>({
  modifiers,
  colors = {} as any,
  spacings = {} as any,
  build,
}: StylerOptions<TModifiers, TColors, TRuleSet, TSpacings>) => {
  const context = createPreset({ modifiers });
  const buildResult = build({ ...context, colors, spacings });
  const styler = sheet(buildResult);
  return Object.assign(styler, {
    propsBuilder(...args: Parameters<typeof styler>) {
      return { className: styler(...args) };
    },
  });
};
