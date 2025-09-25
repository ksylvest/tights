import { describe } from "vitest";

import { renders } from "./support";

import { MenuList } from "./menu_list";

describe(MenuList, () => {
  renders(MenuList, ".menu-list");
});
