import { is } from "../support";
import { renders } from "../support";

import { DropdownItem } from "./dropdown_item";

describe(DropdownItem, () => {
  renders(DropdownItem, ".dropdown-item");
  is(DropdownItem, "active");
});
