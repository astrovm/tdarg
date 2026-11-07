import { afterEach, mock } from "bun:test";
import { cleanup } from "@testing-library/react";

import * as nextCache from "./next-cache";

afterEach(cleanup);

// Outside Next there is no Data Cache: cached functions run directly
mock.module("next/cache", () => ({ unstable_cache: nextCache.unstable_cache }));

// next/font only works inside the Next compiler
mock.module("next/font/google", () => ({ Inter: () => ({ className: "font-inter" }) }));
