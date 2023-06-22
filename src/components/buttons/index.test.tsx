import { has } from "../../support";
import { alignment } from "../../support";
import { renders } from "../../support";

import { Buttons } from "./index";

describe(Buttons, () => {
  renders(Buttons, ".buttons");
  has(Buttons, "addons");
  alignment(Buttons);
});
