import { renders } from "../../support";
import { color } from "../../support";

import { Panel } from ".";

describe(Panel, () => {
  renders(Panel, ".panel");
  color(Panel);
});
