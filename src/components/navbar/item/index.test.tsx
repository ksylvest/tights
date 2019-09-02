import { renders } from "../../../support";
import { has } from "../../../support";
import { is } from "../../../support";

import { Item } from ".";

describe(Item, () => {
  renders(Item, ".navbar-item");
  is(Item, "active");
  is(Item, "hoverable");
  has(Item, "dropdown");
});
