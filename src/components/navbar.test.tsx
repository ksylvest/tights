import { renders } from "../support";
import { color } from "../support";

import { Navbar } from "./navbar";

describe(Navbar, () => {
  renders(Navbar, ".navbar");
  color(Navbar);
});
