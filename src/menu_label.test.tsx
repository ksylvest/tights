import { describe } from "vitest";

import { renders } from "./support";

import { MenuLabel } from "./menu_label";

describe(MenuLabel, () => {
  renders(MenuLabel, ".menu-label");
});
