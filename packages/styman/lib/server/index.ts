import { cache } from "@emotion/css";
import createEmotionServer from "@emotion/server/create-instance";

/**
 * render whole page and return cached CSS classes
 * @param html
 * @returns
 */
export const renderStatic = async (html: string | undefined) => {
  if (typeof html === "undefined") {
    throw new Error("did you forget to return html from renderToString?");
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};
