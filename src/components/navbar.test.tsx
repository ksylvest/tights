import { renders } from "../../support";
import { color } from "../../support";

import { Navbar } from "./index";

describe(Navbar, () => {
  renders(Navbar, ".navbar");
  color(Navbar);
});
