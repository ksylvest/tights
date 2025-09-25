import { describe } from "vitest";

import { renders } from "./support";

import { HeroFoot } from "./hero_foot";

describe(HeroFoot, () => {
  renders(HeroFoot, ".hero-foot");
});
