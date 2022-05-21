import { createStyler } from "./createStyler";
import { layoutModule } from "./layoutModule";

test("inset", () => {
  const styler = createStyler({
    build(context) {
      return { ...layoutModule(context) };
    },
  });
  styler({ inset: ["L", 10] });
});
