import { createStyler } from "./createStyler";
import { borderModule } from "./borderModule";

test("border", () => {
  const styler = createStyler({
    build(context) {
      return { ...borderModule(context) };
    },
  });
  console.log(
    styler({
      b: {
        hover: [1, "solid"],
        $: [1, "solid"],
      },
    })
  );
});
