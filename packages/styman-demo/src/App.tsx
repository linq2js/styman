import { useState } from "react";
import {
  buildDefaultStyler,
  createStyler,
  defaultColorScheme,
} from "styman/styler";

import logo from "./logo.svg";
import "./App.css";

const styler = createStyler({
  colors: defaultColorScheme,
  build: buildDefaultStyler,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styler({ container: true, m: ["X", "auto"] }, "App")}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          className={styler({
            bg: "gradient-to-r",
            from: "indigo-500",
            to: "red-500",
          })}
        >
          Hello Vite + React!
        </p>
        <div
          className={styler({
            bg: "amber",
            w: 20,
            h: 20,
            scale: 50,
            rotate: 30,
            origin: ["left", "bottom"],
          })}
        ></div>
        <div
          className={styler({
            flex: "row",
            bg: "red",
            w: 80,
            s: ["X", 4],
          })}
        >
          <div className={styler({ w: 10, h: 10, bg: "cyan" })}>01</div>
          <div className={styler({ w: 10, h: 10, bg: "cyan" })}>02</div>
          <div className={styler({ w: 10, h: 10, bg: "cyan" })}>03</div>
          <div className={styler({ w: 10, h: 10, bg: "cyan" })}>04</div>
        </div>
        <p>
          <button
            type="button"
            onClick={() => setCount((count) => count + 1)}
            className={styler({
              bg: { hover: "amber-100", active: "red", $: "amber" },
            })}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
