import { describe } from "vitest";

import { renders } from "./support";

import { MenuItem } from "./menu_item";

describe(MenuItem, () => {
  renders(MenuItem, "li");
});
