import { is } from "../../../support";
import { renders } from "../../../support";

import { TabsItem } from "./index";

describe(TabsItem, () => {
  renders(TabsItem, "li");
  is(TabsItem, "active");
});
