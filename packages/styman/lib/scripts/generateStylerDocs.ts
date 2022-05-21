import {
  BORDER_KEYMAP,
  BORDER_RADIUS_KEYMAP,
  buildDefaultStyler,
  createStyler,
  defaultColorScheme,
  MARGIN_KEYMAP,
  PADDING_KEYMAP,
} from "../styler";
import fs from "fs";

const DEFAULT_EXAMPLE = "`styler({ @style: '@variant' })`";

const EXAMPLES = {
  COLOR: "`styler({ @style: 'red' })` or `styler({ @style: 'red-500' })`",
  NUMBER: "`styler({ @style: 5 })`",
  STRING: "`styler({ @style: 'string-value' })`",
  DEFAULT: "`styler({ @style: true })`",
  FRACTION: "`styler({ @style: '1/2' })`",
  PARAM: "",
};

const LINKS = Object.entries({
  "|bg|": "https://tailwindcss.com/docs/background-attachment",
  "|from|to|via|": "https://tailwindcss.com/docs/gradient-color-stops",
  "|tracking|": "https://tailwindcss.com/docs/letter-spacing",
  "|decoration": "https://tailwindcss.com/docs/text-decoration",
  "|text|": "https://tailwindcss.com/docs/text-color",
  "|indent|": "https://tailwindcss.com/docs/text-indent",
  "|whitespace|": "https://tailwindcss.com/docs/whitespace",
  "|align|": "https://tailwindcss.com/docs/vertical-align",
  "|break|": "https://tailwindcss.com/docs/word-break",
  "|font|": "https://tailwindcss.com/docs/font-family",
  "|leading|": "https://tailwindcss.com/docs/line-height",
  "|cursor|": "https://tailwindcss.com/docs/cursor",
  "|b|br|bt|bb|bl|bx|by|": "https://tailwindcss.com/docs/border-width",
  "|width|": "https://tailwindcss.com/docs/width",
  "|height|": "https://tailwindcss.com/docs/height",
  "|min_width|": "https://tailwindcss.com/docs/min-width",
  "|max_width|": "https://tailwindcss.com/docs/max-width",
  "|min_height|": "https://tailwindcss.com/docs/min-height",
  "|max_height|": "https://tailwindcss.com/docs/max-height",
  "|list|": "https://tailwindcss.com/docs/list-style-type",
  "|flex|": "https://tailwindcss.com/docs/flex",
  "|basis|": "https://tailwindcss.com/docs/flex-basis",
  "|grow|": "https://tailwindcss.com/docs/flex-grow",
  "|shrink|": "https://tailwindcss.com/docs/flex-shrink",
  "|order|": "https://tailwindcss.com/docs/flex-order",
  "|gird|": "https://tailwindcss.com/docs/grid-auto-flow",
  "|cols|": "https://tailwindcss.com/docs/grid-template-columns",
  "|rows|": "https://tailwindcss.com/docs/grid-template-rows",
  "|col|col_start|col_end|": "https://tailwindcss.com/docs/grid-column",
  "|row|row_start|row_end|": "https://tailwindcss.com/docs/grid-row",
  "|fap|": "https://tailwindcss.com/docs/gap",
  "|justify|": "https://tailwindcss.com/docs/justify-content",
  "|justify_self|": "https://tailwindcss.com/docs/justify-self",
  "|justify_items|": "https://tailwindcss.com/docs/justify-items",
  "|content|": "https://tailwindcss.com/docs/content",
  "|items|": "https://tailwindcss.com/docs/align-items",
  "|self|": "https://tailwindcss.com/docs/align-self",
  "|place_content|": "https://tailwindcss.com/docs/place-content",
  "|place_items|": "https://tailwindcss.com/docs/place-items",
  "|table|": "https://tailwindcss.com/docs/table-layout",
  "|scale|": "https://tailwindcss.com/docs/scale",
  "|skew|": "https://tailwindcss.com/docs/skew",
  "|translate|": "https://tailwindcss.com/docs/translate",
  "|rotate|": "https://tailwindcss.com/docs/rotate",
  "|origin|": "https://tailwindcss.com/docs/transform-origin",
  "|aspect|": "https://tailwindcss.com/docs/aspect-ratio",
  "|left|top|right|bottom|inset":
    "https://tailwindcss.com/docs/top-right-bottom-left",
  "|visible|invisible|": "https://tailwindcss.com/docs/visibility",
  "|zindex|": "https://tailwindcss.com/docs/z-index",
  "|overscroll|": "https://tailwindcss.com/docs/overscroll-behavior",
  "|overflow|": "https://tailwindcss.com/docs/overflow",
  "|object|": "https://tailwindcss.com/docs/object-position",
  "|isolate|": "https://tailwindcss.com/docs/isolation",
  "|clear|": "https://tailwindcss.com/docs/clear",
  "|float|": "https://tailwindcss.com/docs/float",
  "|box|": "https://tailwindcss.com/docs/box-sizing",
  "|box_decoration|": "https://tailwindcss.com/docs/box-decoration-break",
  "|break_inside|": "https://tailwindcss.com/docs/break-inside",
  "|break_before|": "https://tailwindcss.com/docs/break-before",
  "|break_after|": "https://tailwindcss.com/docs/break-after",
  "|columns|": "https://tailwindcss.com/docs/columns",
  "|outline|": "https://tailwindcss.com/docs/outline-width",
  "|outline_offset|": "https://tailwindcss.com/docs/outline-offset",
  "|opacity|": "https://tailwindcss.com/docs/opacity",
  "|animate|": "https://tailwindcss.com/docs/animation",
  "|accent|": "https://tailwindcss.com/docs/accent-color",
  "|caret|": "https://tailwindcss.com/docs/caret-color",
  "|pointer_events|": "https://tailwindcss.com/docs/pointer-events",
  "|scroll|": "https://tailwindcss.com/docs/scroll-behavior",
  "|scrollp|": "https://tailwindcss.com/docs/scroll-padding",
  "|scrollm|": "https://tailwindcss.com/docs/scroll-margin",
  "|snap|": "https://tailwindcss.com/docs/scroll-snap-align",
  "|touch|": "https://tailwindcss.com/docs/touch-action",
  "|resize|": "https://tailwindcss.com/docs/resize",
  "|select|": "https://tailwindcss.com/docs/user-select",
  "|will_change|": "https://tailwindcss.com/docs/will-change",
  "|apperance|": "https://tailwindcss.com/docs/appearance",
  "|fill|": "https://tailwindcss.com/docs/fill",
  "|stroke|": "https://tailwindcss.com/docs/stroke",
  "|blur|": "https://tailwindcss.com/docs/blur",
  "|brightness|": "https://tailwindcss.com/docs/brightness",
  "|contrast|": "https://tailwindcss.com/docs/contrast",
  "|grayscale|": "https://tailwindcss.com/docs/grayscale",
  "|invert|": "https://tailwindcss.com/docs/invert",
  "|hue_rotate|": "https://tailwindcss.com/docs/hue_rotate",
  "|saturate|": "https://tailwindcss.com/docs/saturate",
  "|sepia|": "https://tailwindcss.com/docs/sepia",
  "|drop_shadow|": "https://tailwindcss.com/docs/drop_shadow",
  "|backdrop_blur|": "https://tailwindcss.com/docs/backdrop-blur",
  "|backdrop_brightness|": "https://tailwindcss.com/docs/backdrop-brightness",
  "|backdrop_contrast|": "https://tailwindcss.com/docs/backdrop-contrast",
  "|backdrop_grayscale|": "https://tailwindcss.com/docs/backdrop-grayscale",
  "|backdrop_invert|": "https://tailwindcss.com/docs/backdrop-invert",
  "|backdrop_hue_rotate|": "https://tailwindcss.com/docs/backdrop-hue-rotate",
  "|backdrop_saturate|": "https://tailwindcss.com/docs/backdrop-saturate",
  "|backdrop_opacity|": "https://tailwindcss.com/docs/backdrop-opacity",
  "|backdrop_sepia|": "https://tailwindcss.com/docs/backdrop-sepia",
  "|d|dx|dy|": "https://tailwindcss.com/docs/divide-width",
  "|s|sx|sy|": "https://tailwindcss.com/docs/space",
  "|m|mt|ml|mr|mb|mx|my|": "https://tailwindcss.com/docs/margin",
  "|p|pt|pl|pr|pb|px|py|": "https://tailwindcss.com/docs/pading",
  "|delay|": "https://tailwindcss.com/docs/transition-delay",
  "|transition|": "https://tailwindcss.com/docs/transition-property",
  "|r|rtl|rbl|rtr|rbr|rt|rl|rb|rr|":
    "https://tailwindcss.com/docs/border-radius",
  "|shadow|": "https://tailwindcss.com/docs/box-shadow",
  "|block|inline|contents|hidden|list_item|flow_root|inline_block|":
    "https://tailwindcss.com/docs/display",
  "|static|fixed|absolute|relative|sticky|":
    "https://tailwindcss.com/docs/position",
});

const LONG_NAMES = {
  ...MARGIN_KEYMAP,
  ...BORDER_RADIUS_KEYMAP,
  ...PADDING_KEYMAP,
  ...BORDER_KEYMAP,
  bg: "background",
  s: "space",
  sx: "space_x",
  sy: "space_y",
  d: "divide",
  dx: "divide_x",
  dy: "divide_y",
  w: "width",
  h: "height",
};

const VARITANTS = {
  COLOR: "**color**",
  NUMBER: "**number**",
  STRING: "**string**",
  DEFAULT: "**true**",
  FRACTION: "**A/B**",
  PARAM: "",
};

const styler = createStyler({
  colors: defaultColorScheme,
  build: buildDefaultStyler,
});

const toc: string[] = [];
const contents: string[] = [];

const getLongName = (name: string) => {
  const value = LONG_NAMES[name as keyof typeof LONG_NAMES];
  if (!value) return "";
  return `${(Array.isArray(value) ? value : [value]).join(", ")}`;
};

Object.entries(styler.rules).forEach(([key, rule]: [any, any]) => {
  const variants: string[] = rule.variants ?? [];
  if (!variants.length) variants.push("DEFAULT");
  const link = LINKS.find((x) => x[0].includes(`|${key}|`));

  contents.push(`## ${key}`);
  toc.push(`[${key}](#${key})`);
  const longName = getLongName(key);
  if (longName) {
    contents.push(`Styles: ${longName}\n`);
  }
  if (link) {
    contents.push(
      `[Click here to see Tailwind description/implementation/example](${link[1]})\n`
    );
  }
  // befin of table
  contents.push(`| Variant | Example |`, `|:---|:---|`);
  variants.forEach((variant: string) => {
    contents.push(
      `| ${VARITANTS[variant as keyof typeof VARITANTS] ?? variant} | ${
        EXAMPLES[variant as keyof typeof EXAMPLES]
          ?.replace(/@style/g, key)
          ?.replace(/@variant/g, variant) ??
        DEFAULT_EXAMPLE.replace(/@style/g, key).replace(/@variant/g, variant)
      } |`
    );
  });
  contents.push("\n\n");
});

fs.writeFileSync(
  "./packages/styman/styler-docs.md",
  [
    "# `Default Styler Styles`",
    `## All styles`,
    toc.join(", "),
    ...contents,
  ].join("\n"),
  "utf-8"
);
