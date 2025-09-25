import { describe } from "vitest";

import { renders } from "./support";

import { PanelTabs } from "./panel_tabs";

describe(PanelTabs, () => {
  renders(PanelTabs, ".panel-tabs");
});
