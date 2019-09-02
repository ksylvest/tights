import { is } from "../../../support";
import { renders } from "../../../support";

import { Item } from ".";

describe(Item, () => {
  renders(Item, "li");
  is(Item, "active");
});
