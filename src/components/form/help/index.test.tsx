import { renders } from "../../../support";
import { color } from "../../../support";

import { Help } from ".";

describe(Help, () => {
  renders(Help, ".help");
  color(Help);
});
