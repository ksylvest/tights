import { renders } from "../../support";
import { is } from "../../support";
import { alignment } from "../../support";

import { Dropdown } from "./index";

describe(Dropdown, () => {
  renders(Dropdown, ".dropdown");
  is(Dropdown, "active");
  is(Dropdown, "hoverable");
  alignment(Dropdown);
});
