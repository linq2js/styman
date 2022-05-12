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
