import { describe } from "vitest";

import { renders } from "./support";

import { Media } from "./media";

describe(Media, () => {
  renders(Media, ".media");
});
