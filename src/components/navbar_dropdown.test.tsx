import { renders } from "../../../support";
import { is } from "../../../support";
import { direction } from "../../../support";

import { NavbarDropdown } from "./index";

describe(NavbarDropdown, () => {
  renders(NavbarDropdown, ".navbar-dropdown");
  is(NavbarDropdown, "boxed");
  direction(NavbarDropdown);
});
