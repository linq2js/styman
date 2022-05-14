import { ColorScheme, Modifiers } from "../dynamic";
import { BuildContext } from "./createStyler";

export const tableModule = <C extends ColorScheme, M extends Modifiers>({
  withModifiers,
  withValues,
}: BuildContext<C, M>) => {
  return {
    ...withModifiers("table", {
      $default: () => ({ display: "table" }),
      ...withValues(
        {
          column: "table-column",
          row: "table-row",
          inline: "inline-table",
          cell: "table-cell",
          caption: "table-caption",
          "column-group": "table-column-group",
          "footer-group": "table-fotter-group",
          "header-group": "table-header-group",
          "row-group": "table-row-group",
        },
        (x) => ({
          display: x,
        })
      ),
      ...withValues(["collapse", "separate"], (x) => ({ borderCollapse: x })),
      ...withValues(["auto", "fixed"], (x) => ({ tableLayout: x })),
    }),
  };
};
