import { renders } from "../../../support";
import { is } from "../../../support";
import { direction } from "../../../support";

import { Dropdown } from ".";

describe(Dropdown, () => {
  renders(Dropdown, ".navbar-dropdown");
  is(Dropdown, "boxed");
  direction(Dropdown);
});
