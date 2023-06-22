import { renders } from "../../support";
import { color } from "../../support";

import { Panel } from "./index";

describe(Panel, () => {
  renders(Panel, ".panel");
  color(Panel);
});
