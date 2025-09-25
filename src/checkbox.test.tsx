import { describe } from "vitest";

import { renders } from "./support";

import { Checkbox } from "./checkbox";

describe(Checkbox, () => {
  renders(Checkbox, ".checkbox");
});
