import { describe } from "vitest";

import { renders } from "./support";

import { NavbarEnd } from "./navbar_end";

describe(NavbarEnd, () => {
  renders(NavbarEnd, ".navbar-end");
});
