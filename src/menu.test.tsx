import { describe } from "vitest";

import { renders } from "./support";

import { Menu } from "./menu";

describe(Menu, () => {
  renders(Menu, ".menu");
});
