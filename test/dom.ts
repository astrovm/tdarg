import { GlobalRegistrator } from "@happy-dom/global-registrator";

// Keep Bun's own fetch and Response for the server tests; happy-dom's
// versions are only needed for the DOM.
const { fetch, Request, Response, Headers } = globalThis;
GlobalRegistrator.register({ url: "http://localhost/" });
Object.assign(globalThis, { fetch, Request, Response, Headers });
