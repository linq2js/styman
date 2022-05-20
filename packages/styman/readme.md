# `styman`

Styling your app with ease

## Installation

**with NPM**

```bash
npm i styman --save
```

**with YARN**

```bash
yarn add styman
```

## Features

1. Work with all JS frameworks
2. Tailwind like syntactic sugar supported
3. Flexible styling
4. SSR supported
5. Fully Typescript supported
6. No boilerplate, no provider

## Usages

### Vanilla JS

```js
import { sheet } from "styman";

const styles = sheet({
  heading: {
    color: "red",
    "&:hover": {
      color: "blue",
    },
  },
});

document.getElementById("app").innerHTML = `<h1 class="${styles({
  heading: true,
})}">Hello Vanilla!</h1>
`;
```

### React JS

```js
import { sheet } from "styman";

const styles = sheet({
  heading: {
    color: "red",
    "&:hover": {
      color: "blue",
    },
  },
});

const App = () => <h1 className={styles({ heading: true })}>Hello React JS</h1>
`;
```

### Global styles

```js
import { root } from "styman";

root(`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Patrick Hand SC';
    font-style: normal;
    font-weight: 400;
    src: local('Patrick Hand SC'),
      local('PatrickHandSC-Regular'),
      url(https://fonts.gstatic.com/s/patrickhandsc/v4/OYFWCgfCR-7uHIovjUZXsZ71Uis0Qeb9Gqo8IZV7ckE.woff2)
        format('woff2');
    unicode-range: U+0100-024f, U+1-1eff,
      U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,
      U+A720-A7FF;
  }
`);
```

### Animation Keyframes

keyframes generates a unique animation name that can be used to animate elements with CSS animations.

```js
import { keyframes, sheet } from "styman";

const bounce = keyframes({
  "from, 20%, 53%, 80%, to": {
    transform: "translate3d(0,0,0)",
  },
  "40%, 43%": {
    transform: "translate3d(0, -30px, 0)",
  },
  "70%": {
    transform: "translate3d(0, -15px, 0)",
  },
  "90%": {
    transform: "translate3d(0, -4px, 0)",
  },
});

const styles = sheet({
  boxAnimation: {
    width: 96,
    height: 96,
    borderRadius: "50%",
    animation: `${bounce} 1s ease infinite`,
    transformOrigin: "center bottom",
  },
});
```

### Toggle style rules

```js
import { sheet } from "styman";

const styles = sheet({
  bold: { fontWeight: "bold" },
  color: (color) => ({ color }),
});

const Text = ({ bold, color, children }) => (
  // styman will skip all falsy values, using true value for enabling no param rule, literal rule
  <div className={styles({ bold, color })}>{children}</div>
);
```

### Adding custom classes or styles

```js
import { sheet } from "styman";

const styles = sheet({
  bold: { fontWeight: "bold" },
  color: (color) => ({ color }),
});

const Text = ({ className, bold, color, children }) => (
  <div
    className={styles(
      // rule selector
      { bold, color },
      // allow parent component to overwrite Text styles
      className,
      // custom styles
      { fontSize: "20px" }
      // add many classes or styles you want here
      // otherClass,
      // otherStyles
      // you can use conditional styling
      // condition ? class1 : class2
      // or condition && class1
    )}
  >
    {children}
  </div>
);
```

### Re-use styles

```js
import { sheet } from "styman";

const commonStyles = sheet({
  link: {
    color: "silver",
    textDecoration: "underline",
    "&:hover": { textDecoration: "none" },
  },
});

const articleStyles = sheet({
  link: commonStyles({ link: true }),
});

const otherLinkStyles = sheet({
  link: [
    articleStyles({ link: true }),
    // add more custom styles
    { color: "blue", "&:hover": { color: "red" } },
  ],
});
```

### Parameterized rule

```js
import { keyframes, sheet } from "styman";

const bounce = keyframes({
  "from, 20%, 53%, 80%, to": {
    transform: "translate3d(0,0,0)",
  },
  "40%, 43%": {
    transform: "translate3d(0, -30px, 0)",
  },
  "70%": {
    transform: "translate3d(0, -15px, 0)",
  },
  "90%": {
    transform: "translate3d(0, -4px, 0)",
  },
});

const styles = sheet({
  // rule has param
  boxAnimation: (time) => ({
    animation: `${bounce} ${time} ease infinite`,
    transformOrigin: "center bottom",
  }),
  // rule has no param
  box: () => ({
    backgroundColor: "silver",
    borderRadius: "50%",
    width: 96,
    height: 96,
  }),
});

<div
  className={styles({
    boxAnimation: "2s",
    box: true,
  })}
></div>;
```

### Cached rules

```js
import { keyframes, sheet, once } from "styman";

// create bounce animation factory
const bounce = once(() =>
  keyframes({
    "from, 20%, 53%, 80%, to": {
      transform: "translate3d(0,0,0)",
    },
    "40%, 43%": {
      transform: "translate3d(0, -30px, 0)",
    },
    "70%": {
      transform: "translate3d(0, -15px, 0)",
    },
    "90%": {
      transform: "translate3d(0, -4px, 0)",
    },
  })
);

const styles = sheet({
  boxAnimation: (time) => ({
    // bounce() will run once and the bounce animation will be only created when bounce() is called
    animation: `${bounce()} ${time} ease infinite`,
    transformOrigin: "center bottom",
  }),
  // rule has no param
  box: () => ({
    backgroundColor: "silver",
    borderRadius: "50%",
    width: 96,
    height: 96,
  }),
});
```

## Using styler

Styler is utils that helps to generate css class faster, it provides a lot of styling modules. It works similar Tailwind CSS

```js
// simple style usage
const className = css({
  // apply red background color
  back: "red",
  // apply multiple styles of background module:
  // red: background color
  // fixed: background attachment
  back: ["red", "fixed"],
  // apply small font size
  // style param can be string, number
  font: "sm",
});
```

### Default Styler

Styman provides a default styler that includes pre-defined style modules

```ts
import {
  buildDefaultStyler,
  createStyler,
  defaultColorScheme,
} from "styman/styler";

// create a styler with default color scheme
const css = createStyler({
  colors: defaultColorScheme,
  // using buildDefaultStyler to build a styler with common modules
  build: buildDefaultStyler,
});

// you implement custom styler with following code
import {
  BuildContext,
  backgroundModule,
  borderModule,
  cursorModule,
  fontModule,
  sizingModule,
  textModule,
  listModule,
  flexModule,
  tableModule,
  transformModule,
  layoutModule,
  opacityModule,
  animationModule,
  interactivityModule,
  svgModule,
  filterModule,
  divideModule,
  spaceModule,
  marginModule,
  paddingModule,
  transitionModule,
  borderRadiusModule,
  outlineModule,
  boxShadowModule,
} from "styman/styler";
import { ColorScheme, Modifiers } from "styman/dynamic";

export const buildCustomStyler = <C extends ColorScheme, M extends Modifiers>(
  context: BuildContext<C, M>
) => {
  return {
    ...backgroundModule(context),
    ...textModule(context),
    ...fontModule(context),
    ...cursorModule(context),
    ...borderModule(context),
    ...sizingModule(context),
    ...listModule(context),
    ...flexModule(context),
    ...tableModule(context),
    ...transformModule(context),
    ...layoutModule(context),
    ...opacityModule(context),
    ...animationModule(context),
    ...interactivityModule(context),
    ...svgModule(context),
    ...filterModule(context),
    ...divideModule(context),
    ...spaceModule(context),
    ...marginModule(context),
    ...paddingModule(context),
    ...transitionModule(context),
    ...borderRadiusModule(context),
    ...outlineModule(context),
    ...boxShadowModule(context),
  };
};
```

[See Tailwind implementations for further info](https://tailwindcss.com/docs/installation)

| Rule                | Variants             |
| :------------------ | :------------------- |
| back                | **color**            |
|                     | fixed                |
|                     | local                |
|                     | scroll               |
|                     | clip-border          |
|                     | clip-padding         |
|                     | clip-content         |
|                     | clip-text            |
|                     | origin-border        |
|                     | origin-padding       |
|                     | origin-content       |
|                     | inherit              |
|                     | current              |
|                     | bottom               |
|                     | center               |
|                     | left                 |
|                     | left-bottom          |
|                     | left-top             |
|                     | right                |
|                     | right-bottom         |
|                     | right-top            |
|                     | top                  |
|                     | repeat               |
|                     | no-repeat            |
|                     | repeat-x             |
|                     | repeat-y             |
|                     | repeat-round         |
|                     | repeat-space         |
|                     | auto                 |
|                     | cover                |
|                     | contain              |
|                     | none                 |
|                     | gradient-to-t        |
|                     | gradient-to-tl       |
|                     | gradient-to-l        |
|                     | gradient-to-bl       |
|                     | gradient-to-b        |
|                     | gradient-to-br       |
|                     | gradient-to-r        |
|                     | gradient-to-tr       |
|                     |                      |
| from                | **color**            |
|                     | inherit              |
|                     | current              |
|                     |                      |
| to                  | **color**            |
|                     | inherit              |
|                     | current              |
|                     |                      |
| via                 | **color**            |
|                     | inherit              |
|                     | current              |
|                     |                      |
| tracking            | tighter              |
|                     | tight                |
|                     | normal               |
|                     | wide                 |
|                     | wider                |
|                     | widest               |
|                     |                      |
| decoration          | **number**           |
|                     | **color**            |
|                     | no-underline         |
|                     | underline            |
|                     | overline             |
|                     | line-through         |
|                     | inherit              |
|                     | current              |
|                     | solid                |
|                     | double               |
|                     | dotted               |
|                     | dashed               |
|                     | wavy                 |
|                     | auto                 |
|                     | from-font            |
|                     |                      |
| text                | **color**            |
|                     | uppercase            |
|                     | lowercase            |
|                     | capitalize           |
|                     | none                 |
|                     | truncate             |
|                     | ellipsis             |
|                     | clip                 |
|                     | xs                   |
|                     | sm                   |
|                     | base                 |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | 3xl                  |
|                     | 4xl                  |
|                     | 5xl                  |
|                     | 6xl                  |
|                     | 7xl                  |
|                     | 8xl                  |
|                     | 9xl                  |
|                     | left                 |
|                     | right                |
|                     | center               |
|                     | justify              |
|                     |                      |
| indent              | **number**           |
|                     | px                   |
|                     |                      |
| whitespace          | normal               |
|                     | pre                  |
|                     | pre-wrap             |
|                     | pre-line             |
|                     | nowrap               |
|                     |                      |
| align               | baseline             |
|                     | top                  |
|                     | middle               |
|                     | bottom               |
|                     | text-top             |
|                     | text-bottom          |
|                     | sub                  |
|                     | super                |
|                     |                      |
| break               | normal               |
|                     | words                |
|                     | all                  |
|                     |                      |
| font                | sans                 |
|                     | serif                |
|                     | mono                 |
|                     | antialiased          |
|                     | subpixel-antialiased |
|                     | normal-nums          |
|                     | ordinal              |
|                     | slashed-zero         |
|                     | lining-nums          |
|                     | oldstyle-nums        |
|                     | proportional-nums    |
|                     | tabular-nums         |
|                     | diagonal-fractions   |
|                     | stacked-fractions    |
|                     | italic               |
|                     | non-italic           |
|                     | thin                 |
|                     | extraLight           |
|                     | light                |
|                     | normal               |
|                     | medium               |
|                     | semiBold             |
|                     | bold                 |
|                     | extraBold            |
|                     | black                |
|                     | xs                   |
|                     | sm                   |
|                     | base                 |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | 3xl                  |
|                     | 4xl                  |
|                     | 5xl                  |
|                     | 6xl                  |
|                     | 7xl                  |
|                     | 8xl                  |
|                     | 9xl                  |
|                     |                      |
| leading             | **number**           |
|                     | none                 |
|                     | tight                |
|                     | snug                 |
|                     | normal               |
|                     | relaxed              |
|                     | loose                |
|                     |                      |
| cursor              | auto                 |
|                     | default              |
|                     | pointer              |
|                     | wait                 |
|                     | text                 |
|                     | move                 |
|                     | help                 |
|                     | not-allowed          |
|                     | none                 |
|                     | context-menu         |
|                     | progress             |
|                     | cell                 |
|                     | crosshair            |
|                     | vertical-text        |
|                     | alias                |
|                     | copy                 |
|                     | no-drop              |
|                     | grab                 |
|                     | grabbing             |
|                     | all-scroll           |
|                     | col-resize           |
|                     | row-resize           |
|                     | n-resize             |
|                     | e-resize             |
|                     | s-resize             |
|                     | w-resize             |
|                     | ne-resize            |
|                     | se-resize            |
|                     | sw-resize            |
|                     | ew-resize            |
|                     | ns-resize            |
|                     | nesw-resize          |
|                     | zoom-in              |
|                     | zoom-out             |
|                     |                      |
| border              | **number**           |
|                     | **color**            |
|                     | $sides               |
|                     | solid                |
|                     | dashed               |
|                     | dotted               |
|                     | double               |
|                     | hidden               |
|                     |                      |
| width               | **A/B**%             |
|                     | **number**           |
|                     | screen               |
|                     | px                   |
|                     | auto                 |
|                     | full                 |
|                     | min                  |
|                     | max                  |
|                     | fit                  |
|                     |                      |
| min_width           | **A/B**%             |
|                     | **number**           |
|                     | screen               |
|                     | min                  |
|                     | max                  |
|                     | fit                  |
|                     | full                 |
|                     |                      |
| max_width           | **A/B**%             |
|                     | **number**           |
|                     | screen               |
|                     | min                  |
|                     | max                  |
|                     | fit                  |
|                     | full                 |
|                     | none                 |
|                     | prose                |
|                     | xs                   |
|                     | sm                   |
|                     | md                   |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | 3xl                  |
|                     | 4xl                  |
|                     | 5xl                  |
|                     | 6xl                  |
|                     | 7xl                  |
|                     | screen-sm            |
|                     | screen-md            |
|                     | screen-lg            |
|                     | screen-xl            |
|                     | screen-2xl           |
|                     |                      |
| height              | **A/B**%             |
|                     | **number**           |
|                     | screen               |
|                     | px                   |
|                     | auto                 |
|                     | full                 |
|                     | min                  |
|                     | max                  |
|                     | fit                  |
|                     |                      |
| min_height          | **A/B**%             |
|                     | **number**           |
|                     | screen               |
|                     | min                  |
|                     | max                  |
|                     | fit                  |
|                     | full                 |
|                     |                      |
| max_height          | **A/B**%             |
|                     | **number**           |
|                     | screen               |
|                     | min                  |
|                     | max                  |
|                     | fit                  |
|                     | full                 |
|                     | none                 |
|                     | prose                |
|                     | xs                   |
|                     | sm                   |
|                     | md                   |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | 3xl                  |
|                     | 4xl                  |
|                     | 5xl                  |
|                     | 6xl                  |
|                     | 7xl                  |
|                     | screen-sm            |
|                     | screen-md            |
|                     | screen-lg            |
|                     | screen-xl            |
|                     | screen-2xl           |
|                     |                      |
| list                | inside               |
|                     | outside              |
|                     | none                 |
|                     | disc                 |
|                     | decimal              |
|                     |                      |
| flex                | **true**             |
|                     | **number**           |
|                     | 1                    |
|                     | none                 |
|                     | auto                 |
|                     | initial              |
|                     | inline               |
|                     | row                  |
|                     | row-reverse          |
|                     | col                  |
|                     | col-reverse          |
|                     | wrap                 |
|                     | wrap-reverse         |
|                     | nowrap               |
|                     |                      |
| basis               | **A/B**%             |
|                     | **number**           |
|                     | auto                 |
|                     | full                 |
|                     | px                   |
|                     |                      |
| grow                | **true**             |
|                     | **number**           |
|                     |                      |
| shrink              | **true**             |
|                     | **number**           |
|                     |                      |
| order               | **number**           |
|                     | first                |
|                     | last                 |
|                     | none                 |
|                     |                      |
| grid                | **true**             |
|                     | inline               |
|                     | row                  |
|                     | col                  |
|                     | row-dense            |
|                     | col-dense            |
|                     |                      |
| cols                | **number**           |
|                     | none                 |
|                     | auto                 |
|                     | min                  |
|                     | max                  |
|                     | fr                   |
|                     |                      |
| rows                | **number**           |
|                     | none                 |
|                     | auto                 |
|                     | min                  |
|                     | max                  |
|                     | fr                   |
|                     |                      |
| col                 | **number**           |
|                     | auto                 |
|                     | full                 |
|                     |                      |
| col_start           | **number**           |
|                     | auto                 |
|                     |                      |
| col_end             | **number**           |
|                     | auto                 |
|                     |                      |
| row                 | **number**           |
|                     | auto                 |
|                     | full                 |
|                     |                      |
| row_start           | **number**           |
|                     | auto                 |
|                     |                      |
| row_end             | **number**           |
|                     | auto                 |
|                     |                      |
| gap                 | **number**           |
|                     | px                   |
|                     | $xy                  |
|                     |                      |
| justify             | start                |
|                     | end                  |
|                     | center               |
|                     | between              |
|                     | around               |
|                     | evenly               |
|                     |                      |
| justify_items       | start                |
|                     | end                  |
|                     | center               |
|                     | stretch              |
|                     |                      |
| justify_self        | auto                 |
|                     | start                |
|                     | end                  |
|                     | center               |
|                     | stretch              |
|                     |                      |
| content             | start                |
|                     | end                  |
|                     | center               |
|                     | between              |
|                     | around               |
|                     | evenly               |
|                     |                      |
| items               | start                |
|                     | end                  |
|                     | center               |
|                     | stretch              |
|                     | baseline             |
|                     |                      |
| align_self          | auto                 |
|                     | start                |
|                     | end                  |
|                     | center               |
|                     | stretch              |
|                     | baseline             |
|                     |                      |
| place_content       | start                |
|                     | end                  |
|                     | center               |
|                     | stretch              |
|                     | between              |
|                     | around               |
|                     | evenly               |
|                     |                      |
| place_items         | start                |
|                     | end                  |
|                     | center               |
|                     | stretch              |
|                     |                      |
| place_self          | auto                 |
|                     | start                |
|                     | end                  |
|                     | center               |
|                     | stretch              |
|                     |                      |
| center              | **true**             |
|                     | x                    |
|                     | y                    |
|                     |                      |
| table               | **true**             |
|                     | column               |
|                     | row                  |
|                     | inline               |
|                     | cell                 |
|                     | caption              |
|                     | column-group         |
|                     | footer-group         |
|                     | header-group         |
|                     | row-group            |
|                     | collapse             |
|                     | separate             |
|                     | auto                 |
|                     | fixed                |
|                     |                      |
| scale               | **number**           |
|                     | $xy                  |
|                     |                      |
| skew                | **number**           |
|                     | $xy                  |
|                     |                      |
| translate           | **A/B**%             |
|                     | **number**           |
|                     | px                   |
|                     | full                 |
|                     | $xy                  |
|                     |                      |
| rotate              | **number**           |
|                     |                      |
| origin              | $param               |
|                     |                      |
| aspect              | **string**           |
|                     | auto                 |
|                     | squared              |
|                     | video                |
|                     |                      |
| left                | **A/B**%             |
|                     | **number**           |
|                     |                      |
| top                 | **A/B**%             |
|                     | **number**           |
|                     |                      |
| right               | **A/B**%             |
|                     | **number**           |
|                     |                      |
| bottom              | **A/B**%             |
|                     | **number**           |
|                     |                      |
| inset               | **A/B**%             |
|                     | **number**           |
|                     | $xy                  |
|                     |                      |
| visible             | **true**             |
|                     |                      |
| invisible           | **true**             |
|                     |                      |
|                     |                      |
|                     |                      |
|                     |                      |
|                     |                      |
|                     |                      |
| zindex              | **number**           |
|                     | auto                 |
|                     |                      |
| overscroll          | $xy                  |
|                     | auto                 |
|                     | contain              |
|                     | none                 |
|                     |                      |
| overflow            | $xy                  |
|                     | auto                 |
|                     | hidden               |
|                     | clip                 |
|                     | visible              |
|                     | scroll               |
|                     |                      |
| object              | $param               |
|                     |                      |
| isolate             | **true**             |
|                     | auto                 |
|                     |                      |
| clear               | left                 |
|                     | right                |
|                     | both                 |
|                     | none                 |
|                     |                      |
| float               | left                 |
|                     | right                |
|                     | none                 |
|                     |                      |
| block               | **true**             |
|                     |                      |
| inline              | **true**             |
|                     |                      |
| contents            | **true**             |
|                     |                      |
| hidden              | **true**             |
|                     |                      |
| list_item           | **true**             |
|                     |                      |
| flow_root           | **true**             |
|                     |                      |
| inline_block        | **true**             |
|                     |                      |
| box                 | border               |
|                     | content              |
|                     |                      |
| box_decoration      | clone                |
|                     | slice                |
|                     |                      |
| break_inside        | auto                 |
|                     | avoid                |
|                     | avoid-page           |
|                     | avoid-column         |
|                     |                      |
| break_before        | auto                 |
|                     | avoid                |
|                     | avoid-page           |
|                     | all                  |
|                     | page                 |
|                     | left                 |
|                     | right                |
|                     | column               |
|                     |                      |
| break_after         | auto                 |
|                     | avoid                |
|                     | avoid-page           |
|                     | all                  |
|                     | page                 |
|                     | left                 |
|                     | right                |
|                     | column               |
|                     |                      |
| columns             | **number**           |
|                     | auto                 |
|                     | 3xs                  |
|                     | 2xs                  |
|                     | xs                   |
|                     | sm                   |
|                     | md                   |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | 3xl                  |
|                     | 4xl                  |
|                     | 5xl                  |
|                     | 6xl                  |
|                     | 7xl                  |
|                     |                      |
|                     |                      |
| outline             | **true**             |
|                     | **number**           |
|                     | **color**            |
|                     | dashed               |
|                     | dotted               |
|                     | double               |
|                     | hidden               |
|                     | none                 |
|                     |                      |
| outline_offset      | **number**           |
|                     |                      |
| opacity             | **number**           |
|                     |                      |
| animate             | none                 |
|                     | spin                 |
|                     | ping                 |
|                     | pulse                |
|                     | bounce               |
|                     |                      |
| accent              | **color**            |
|                     | inherit              |
|                     | current              |
|                     |                      |
| caret               | **color**            |
|                     | inherit              |
|                     | current              |
|                     |                      |
| pointer_events      | none                 |
|                     | auto                 |
|                     |                      |
| scroll              | $sides               |
|                     | smooth               |
|                     | auto                 |
|                     |                      |
| scrollp             | **number**           |
|                     |                      |
| scrollm             | **number**           |
|                     |                      |
| snap                | mandatory            |
|                     | proximity            |
|                     | start                |
|                     | end                  |
|                     | center               |
|                     | align-none           |
|                     | normal               |
|                     | always               |
|                     | none                 |
|                     | x                    |
|                     | y                    |
|                     | both                 |
|                     |                      |
| touch               | auto                 |
|                     | none                 |
|                     | pan-x                |
|                     | pan-y                |
|                     | pan-left             |
|                     | pan-right            |
|                     | pan-up               |
|                     | pan-down             |
|                     | pinch-zoom           |
|                     | manipulation         |
|                     |                      |
| resize              | **true**             |
|                     | none                 |
|                     | x                    |
|                     | y                    |
|                     |                      |
| select              | none                 |
|                     | text                 |
|                     | all                  |
|                     | auto                 |
|                     |                      |
| will_change         | auto                 |
|                     | scroll               |
|                     | contents             |
|                     | transform            |
|                     |                      |
| appearance          | none                 |
|                     | auto                 |
|                     | button               |
|                     | menulist-button      |
|                     | textfield            |
|                     | searchfield          |
|                     | textarea             |
|                     | push-button          |
|                     | slider-horizontal    |
|                     | checkbox             |
|                     | radio                |
|                     | square-button        |
|                     | menulist             |
|                     | listbox              |
|                     | meter                |
|                     | progress-bar         |
|                     | scrollbarbutton-up   |
|                     | button-bevel         |
|                     | media-mute-button    |
|                     | caret                |
|                     | inherit              |
|                     | initial              |
|                     | revert               |
|                     | revert-layer         |
|                     | unset                |
|                     |                      |
| fill                | **color**            |
|                     | inherit              |
|                     | current              |
|                     |                      |
| stroke              | **number**           |
|                     | **color**            |
|                     | inherit              |
|                     | current              |
|                     |                      |
| blur                | **true**             |
|                     | **number**           |
|                     | none                 |
|                     | sm                   |
|                     | md                   |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | 3xl                  |
|                     |                      |
| brightness          | **number**           |
|                     |                      |
| contrast            | **number**           |
|                     |                      |
| grayscale           | **true**             |
|                     | **number**           |
|                     |                      |
| invert              | **true**             |
|                     | **number**           |
|                     |                      |
| hue_rotate          | **number**           |
|                     |                      |
| saturate            | **number**           |
|                     |                      |
| sepia               | **true**             |
|                     | **number**           |
|                     |                      |
| drop_shadow         | **true**             |
|                     | sm                   |
|                     | md                   |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | none                 |
|                     |                      |
| backdrop_blur       | **true**             |
|                     | **number**           |
|                     | none                 |
|                     | sm                   |
|                     | md                   |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | 3xl                  |
|                     |                      |
| backdrop_brightness | **number**           |
|                     |                      |
| backdrop_contrast   | **number**           |
|                     |                      |
| backdrop_grayscale  | **true**             |
|                     | **number**           |
|                     |                      |
| backdrop_invert     | **true**             |
|                     | **number**           |
|                     |                      |
| backdrop_hue_rotate | **number**           |
|                     |                      |
| backdrop_saturate   | **number**           |
|                     |                      |
| backdrop_opacity    | **number**           |
|                     |                      |
| backdrop_sepia      | **true**             |
|                     | **number**           |
|                     |                      |
| divide              | **number**           |
|                     | **color**            |
|                     | $xy                  |
|                     | reverse              |
|                     | px                   |
|                     | solid                |
|                     | dotted               |
|                     | dashed               |
|                     | none                 |
|                     | double               |
|                     |                      |
| space               | **number**           |
|                     | $xy                  |
|                     | reverse              |
|                     | px                   |
|                     |                      |
| margin              | **A/B**%             |
|                     | **number**           |
|                     | px                   |
|                     | $sides               |
|                     | auto                 |
|                     |                      |
| padding             | **A/B**%             |
|                     | **number**           |
|                     | px                   |
|                     | $sides               |
|                     |                      |
| delay               | **number**           |
|                     |                      |
| transition          | **true**             |
|                     | **number**           |
|                     | none                 |
|                     | linear               |
|                     | in                   |
|                     | out                  |
|                     | in-out               |
|                     | all                  |
|                     | opacity              |
|                     | shadow               |
|                     | transform            |
|                     | colors               |
|                     |                      |
| rounded             | **A/B**%             |
|                     | **number**           |
|                     | none                 |
|                     | sm                   |
|                     | md                   |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | 3xl                  |
|                     | full                 |
|                     |                      |
| shadow              | **color**            |
|                     | sm                   |
|                     | md                   |
|                     | lg                   |
|                     | xl                   |
|                     | 2xl                  |
|                     | inner                |
|                     | none                 |
|                     | inherit              |
|                     | current              |
|                     |                      |
