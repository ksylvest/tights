import { renders } from "./support";
import { alignment } from "./support";
import { size } from "./support";
import { is } from "./support";
import { property } from "./support";

import { Tabs } from "./tabs";

describe(Tabs, () => {
  renders(Tabs, ".tabs");
  alignment(Tabs);
  size(Tabs);
  is(Tabs, "fullwidth");
  property("style", Tabs, { style: "boxed" }, ".is-boxed");
});
