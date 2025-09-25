import { describe } from "vitest";

import { renders } from "./support";

import { LevelLeft } from "./level_left";

describe(LevelLeft, () => {
  renders(LevelLeft, ".level-left");
});
