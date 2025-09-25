import { describe } from "vitest";

import { renders } from "./support";

import { Section } from "./section";

describe(Section, () => {
  renders(Section, ".section");
});
