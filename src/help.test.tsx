import { renders } from "./support";
import { color } from "./support";

import { Help } from "./help";

describe(Help, () => {
  renders(Help, ".help");
  color(Help);
});
