import { describe } from "vitest";

import { renders } from "./support";

import { PanelIcon } from "./panel_icon";

describe(PanelIcon, () => {
  renders(PanelIcon, ".panel-icon");
});
