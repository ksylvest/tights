import { describe } from "vitest";

import { renders } from "./support";

import { DropdownTrigger } from "./dropdown_trigger";

describe(DropdownTrigger, () => {
  renders(DropdownTrigger, ".dropdown-trigger");
});
