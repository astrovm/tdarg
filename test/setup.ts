import { afterEach } from "bun:test";
import { GlobalRegistrator } from "@happy-dom/global-registrator";

// Components render into Happy DOM; server code keeps Bun's own fetch and
// Response so route and price tests exercise the real runtime.
const { fetch, Request, Response, Headers, URL, URLSearchParams } = globalThis;
GlobalRegistrator.register({ url: "https://tdarg.com.ar/" });
Object.assign(globalThis, { fetch, Request, Response, Headers, URL, URLSearchParams });

const { cleanup } = await import("@testing-library/react");

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});
