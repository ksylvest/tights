import { describe } from "vitest";

import { renders } from "./support";
import { has } from "./support";
import { is } from "./support";

import { NavbarItem } from "./navbar_item";

describe(NavbarItem, () => {
  renders(NavbarItem, ".navbar-item");
  is(NavbarItem, "active");
  is(NavbarItem, "hoverable");
  has(NavbarItem, "dropdown");
});
