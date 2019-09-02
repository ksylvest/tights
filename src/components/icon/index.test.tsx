import { renders } from "../../support";
import { property } from "../../support";
import { size } from "../../support";

import { Icon } from ".";

describe(Icon, () => {
  renders(Icon, ".icon");
  size(Icon);
  property("color", Icon, { color: "info" }, ".has-text-info");
});
