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

class CreatePresetWrappedType<T extends Modifiers> {
  wrapped() {
    return createPreset<T>();
  }
}

export type BuildContext<
  TColors extends ColorScheme,
  TModifiers extends Modifiers
> = {
  colors: TColors;
} & ReturnType<CreatePresetWrappedType<TModifiers>["wrapped"]>;

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
  return sheet(build({ ...context, colors }));
};
