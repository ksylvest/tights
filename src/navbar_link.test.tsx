import { describe } from "vitest";

import { renders } from "./support";

import { NavbarLink } from "./navbar_link";

describe(NavbarLink, () => {
  renders(NavbarLink, ".navbar-link");
});
