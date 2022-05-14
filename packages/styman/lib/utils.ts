export const toRgb = (
  color: string,
  postfix: string = "",
  fallback: string = ""
) => {
  if (color[0] === "#") {
    const r = parseInt(color[1] + color[2], 16);
    const g = parseInt(color[3] + color[4], 16);
    const b = parseInt(color[5] + color[6], 16);
    return `rgb(${r} ${g} ${b}${postfix})`;
  }
  // is rgb or css variable
  if (color.startsWith("--") || color.startsWith("rgb(")) {
    return fallback || color;
  }
  if (fallback) return fallback;
  throw new Error(`Not supported color${color}`);
};
