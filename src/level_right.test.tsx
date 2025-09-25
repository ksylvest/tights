import { describe } from "vitest";

import { renders } from "./support";

import { LevelRight } from "./level_right";

describe(LevelRight, () => {
  renders(LevelRight, ".level-right");
});
