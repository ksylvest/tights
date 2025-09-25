import { describe } from "vitest";

import { renders } from "./support";
import { is } from "./support";
import { direction } from "./support";

import { NavbarDropdown } from "./navbar_dropdown";

describe(NavbarDropdown, () => {
  renders(NavbarDropdown, ".navbar-dropdown");
  is(NavbarDropdown, "boxed");
  direction(NavbarDropdown);
});
