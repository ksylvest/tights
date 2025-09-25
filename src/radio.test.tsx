import { describe } from "vitest";

import { renders } from "./support";

import { Radio } from "./radio";

describe(Radio, () => {
  renders(Radio, ".radio");
});
