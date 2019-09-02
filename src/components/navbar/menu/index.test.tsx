import { renders } from "../../../support";
import { is } from "../../../support";

import { Menu } from ".";

describe(Menu, () => {
  renders(Menu, ".navbar-menu");
  is(Menu, "active");
});
