import { describe } from "vitest";

import { renders } from "./support";

import { TabsList } from "./tabs_list";

describe(TabsList, () => {
  renders(TabsList, "ul");
});
