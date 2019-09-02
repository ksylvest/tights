import { is } from "../../../support";
import { renders } from "../../../support";

import { Item } from ".";

describe(Item, () => {
  renders(Item, ".dropdown-item");
  is(Item, "active");
});
