import { is } from "./support";
import { renders } from "./support";

import { TabsItem } from "./tabs_item";

describe(TabsItem, () => {
  renders(TabsItem, "li");
  is(TabsItem, "active");
});
