import { describe } from "vitest";

import { renders } from "./support";

import { Label } from "./label";

describe(Label, () => {
  renders(Label, ".label");
});
