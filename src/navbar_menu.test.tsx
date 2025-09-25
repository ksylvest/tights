import { describe } from "vitest";

import { renders } from "./support";
import { is } from "./support";

import { NavbarMenu } from "./navbar_menu";

describe(NavbarMenu, () => {
  renders(NavbarMenu, ".navbar-menu");
  is(NavbarMenu, "active");
});
