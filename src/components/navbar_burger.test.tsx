import { renders } from "../../../support";
import { is } from "../../../support";

import { NavbarBurger } from "./index";

describe(NavbarBurger, () => {
  renders(NavbarBurger, ".navbar-burger");
  is(NavbarBurger, "active");
});
