import { describe } from "vitest";

import { renders } from "./support";

import { DropdownDivider } from "./dropdown_divider";

describe(DropdownDivider, () => {
  renders(DropdownDivider, "hr.dropdown-divider");
});
