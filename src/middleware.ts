import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (ctx, next) => {
  const url = new URL(ctx.request.url);

  if (url.pathname === "/solgreen-site" || url.pathname === "/solgreen-site/") {
    return ctx.redirect("/" + url.search, 301);
  }

  if (url.pathname.startsWith("/solgreen-site/")) {
    const novoPath = url.pathname.replace(/^\/solgreen-site\//, "/");
    return ctx.redirect(novoPath + url.search, 301);
  }

  return next();
});
