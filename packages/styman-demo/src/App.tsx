import { PropsWithChildren, useState } from "react";
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

type PageProps = PropsWithChildren<{ active?: boolean; className?: string }>;

const Page = ({ active, ...props }: PageProps) => {
  const className = css(
    [
      {
        transition: ["all", 400, "in-out"],
        origin: ["left", "top"],
        absolute: true,
        w: "full",
        h: "full",
      },
      active
        ? { opacity: 1, scale: 100, r: "none", zindex: 1 }
        : { opacity: 0, scale: 0, r: "full" },
    ],
    props.className
  );
  return <div {...props} className={className} />;
};

function App() {
  const [page, setPage] = useState("about");

  return (
    <div
      className={css({
        w: "screen",
        h: "screen",
        bg: "slate-900",
        text: "white",
      })}
    >
      <div className={css({ container: true, mx: "auto", flex: true })}>
        <div className={css({ w: 80, h: "screen", bg: "slate-800" })}>
          Side bar
        </div>
        <div
          className={css({
            flex: ["col", 1],
            h: "screen",
            bg: "slate-700",
          })}
        >
          {/* navigation */}
          <div
            className={css({
              text: ["uppercase", "slate-300"],
              flex: true,
              font: "xs",
              sx: 4,
            })}
          >
            {Object.keys(PAGES).map((key) => (
              <a
                key={key}
                className={css({
                  text: {
                    hover: "slate-400",
                    $: page === key ? "white" : "slate-500",
                  },
                  cursor: "pointer",
                  transition: ["colors", 300],
                  px: 4,
                  py: 2,
                })}
                onClick={() => setPage(key)}
              >
                {PAGES[key]}
              </a>
            ))}
          </div>
          <div className={css({ grow: 1, relative: true, overflow: "hidden" })}>
            <Page active={page === "about"}>
              <div className={css({ inset: ["L", 10] })}></div>
            </Page>
            <Page active={page === "experience"}>Experience page</Page>
            <Page active={page === "work"}>Work page</Page>
            <Page active={page === "contact"}>Contact page</Page>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
