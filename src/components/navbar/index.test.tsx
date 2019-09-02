import { renders } from "../../support";
import { color } from "../../support";

import { Navbar } from ".";

describe(Navbar, () => {
  renders(Navbar, ".navbar");
  color(Navbar);
});
