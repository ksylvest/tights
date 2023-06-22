import { renders } from "../../../support";
import { has } from "../../../support";
import { is } from "../../../support";

import { NavbarItem } from "./index";

describe(NavbarItem, () => {
  renders(NavbarItem, ".navbar-item");
  is(NavbarItem, "active");
  is(NavbarItem, "hoverable");
  has(NavbarItem, "dropdown");
});
