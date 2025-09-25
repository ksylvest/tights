import { describe } from "vitest";

import { renders } from "./support";

import { Level } from "./level";

describe(Level, () => {
  renders(Level, ".level");
});
