import {
  buildDefaultStyler,
  createStyler,
  defaultColorScheme,
} from "../styler";
import fs from "fs";

const styler = createStyler({
  colors: defaultColorScheme,
  build: buildDefaultStyler,
});

const lines: string[] = [
  "# `Default Styler Styles`",
  `[See Tailwind implementations for further info](https://tailwindcss.com/docs/installation)`,
  "",
  `| Style | Variants |`,
  `|:---|:---|`,
];
Object.entries(styler.rules).forEach(([key, rule]: [any, any]) => {
  const variants: string[] = rule.variants ?? [];

  variants.forEach((variant: string, i) => {
    lines.push(`| ${i === 0 ? key : ""} | ${variant} |`);
  });
  lines.push("|  |  |");
});

fs.writeFileSync("./packages/styman/styler-docs.md", lines.join("\n"), "utf-8");
