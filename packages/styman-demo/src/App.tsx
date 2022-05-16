import { useState } from "react";
import {
  buildDefaultStyler,
  createStyler,
  defaultColorScheme,
} from "styman/styler";

import "./App.css";

const css = createStyler({
  colors: defaultColorScheme,
  build: buildDefaultStyler,
});

const PAGES: Record<string, string> = {
  about: "About",
  experience: "Experience",
  work: "Work",
  contact: "Contact",
};

function App() {
  const [page, setPage] = useState("about");

  return (
    <div
      className={css({
        width: "screen",
        height: "screen",
        back: "slate-900",
        text: "white",
      })}
    >
      <div
        className={css({ container: true, margin: ["X", "auto"], flex: true })}
      >
        <div
          className={css({ width: 80, height: "screen", back: "slate-800" })}
        >
          Side bar
        </div>
        <div
          className={css({
            grow: 1,
            flex: "col",
            height: "screen",
            back: "slate-700",
          })}
        >
          {/* navigation */}
          <div
            className={css({
              text: ["uppercase", "slate-300"],
              flex: true,
              font: "xs",
              space: 4,
            })}
          >
            {Object.keys(PAGES).map((key) => (
              <a
                key={key}
                className={css({
                  text: {
                    hover: "slate-300",
                    $: page === key && "white",
                  },
                  cursor: "pointer",
                  transition: ["colors", 300],
                  padding: ["X", 4, "Y", 2],
                })}
                onClick={() => setPage(key)}
              >
                {PAGES[key]}
              </a>
            ))}
          </div>
          <div className={css({ grow: 1, relative: true, overflow: "hidden" })}>
            <div
              className={css({
                back: "red",
                transition: "all",
                absolute: true,
                width: "full",
                height: "full",
                left: page === "about" ? 0 : -10000,
              })}
            ></div>
            <div
              className={css({
                grow: 1,
                back: "green",
                transition: "all",
                absolute: true,
                width: "full",
                height: "full",
                left: page === "experience" ? 0 : -10000,
              })}
            ></div>
            <div
              className={css([
                {
                  grow: 1,
                  back: "blue",
                  transition: "all",
                  absolute: true,
                  width: "full",
                  height: "full",
                  left: page === "work" ? 0 : -10000,
                },
                undefined,
              ])}
            ></div>
            <div
              className={css({
                grow: 1,
                back: "orange",
                transition: "all",
                absolute: true,
                width: "full",
                height: "full",
                left: page === "contact" ? 0 : -10000,
              })}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
