import { renders } from "./support";
import { is } from "./support";

import { NavbarBurger } from "./navbar_burger";

describe(NavbarBurger, () => {
  renders(NavbarBurger, ".navbar-burger");
  is(NavbarBurger, "active");
});
