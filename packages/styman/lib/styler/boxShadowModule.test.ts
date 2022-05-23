import { createStyler } from "./createStyler";
import { boxShadowModule } from "./boxShadowModule";

test("shadow", () => {
  const styler = createStyler({
    build(context) {
      return { ...boxShadowModule(context) };
    },
  });
  console.log(styler({ shadow: true }));
});
