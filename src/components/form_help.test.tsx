import { renders } from "../support";
import { color } from "../support";

import { Help } from "./form_help";

describe(Help, () => {
  renders(Help, ".help");
  color(Help);
});
