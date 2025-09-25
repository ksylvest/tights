import { describe } from "vitest";

import { renders } from "./support";

import { HeroBody } from "./hero_body";

describe(HeroBody, () => {
  renders(HeroBody, ".hero-body");
});
