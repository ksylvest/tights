import { renders } from "../../../support";
import { is } from "../../../support";

import { NavbarMenu } from "./index";

describe(NavbarMenu, () => {
  renders(NavbarMenu, ".navbar-menu");
  is(NavbarMenu, "active");
});
