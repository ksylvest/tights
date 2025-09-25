import { describe } from "vitest";

import { renders } from "./support";

import { MediaLeft } from "./media_left";

describe(MediaLeft, () => {
  renders(MediaLeft, ".media-left");
});
