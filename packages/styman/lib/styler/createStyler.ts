import { createPreset, ColorScheme, Modifiers } from "../dynamic";
import { RuleSet, sheet } from "../main";

export interface StylerOptions<
  TModifiers extends Record<string, string>,
  TColors extends ColorScheme,
  TResult
> {
  modifiers?: TModifiers;
  colors?: TColors;
  build: (context: BuildContext<TColors, TModifiers>) => TResult;
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
  TModifiers extends Modifiers
> = {
  colors: TColors;
  modifiers?: TModifiers;
} & ReturnType<CreatePresetWrappedType<TModifiers>["type"]>;

export const createStyler = <
  TModifiers extends Record<string, string>,
  TColors extends ColorScheme,
  TRuleSet extends RuleSet
>({
  modifiers,
  colors = {} as any,
  build,
}: StylerOptions<TModifiers, TColors, TRuleSet>) => {
  const context = createPreset({ modifiers });
  const styler = sheet(build({ ...context, colors }));
  return Object.assign(styler, {
    propsBuilder(...args: Parameters<typeof styler>) {
      return { className: styler(...args) };
    },
  });
};
