import { describe } from "vitest";

import { renders } from "./support";

import { DropdownMenu } from "./dropdown_menu";

describe(DropdownMenu, () => {
  renders(DropdownMenu, ".dropdown-menu");
});
