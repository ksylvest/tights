import { describe } from "vitest";

import { renders } from "./support";

import { DropdownContent } from "./dropdown_content";

describe(DropdownContent, () => {
  renders(DropdownContent, ".dropdown-content");
});
