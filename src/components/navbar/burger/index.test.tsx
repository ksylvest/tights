import { renders } from "../../../support";
import { is } from "../../../support";

import { Burger } from ".";

describe(Burger, () => {
  renders(Burger, ".navbar-burger");
  is(Burger, "active");
});
