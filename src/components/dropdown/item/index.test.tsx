import { is } from "../../../support";
import { renders } from "../../../support";

import { DropdownItem } from "./index";

describe(DropdownItem, () => {
  renders(DropdownItem, ".dropdown-item");
  is(DropdownItem, "active");
});
