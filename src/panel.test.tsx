import { describe } from "vitest";

import { renders } from "./support";
import { color } from "./support";

import { Panel } from "./panel";

describe(Panel, () => {
  renders(Panel, ".panel");
  color(Panel);
});
