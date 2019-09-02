import { renders } from "../../support";
import { property } from "../../support";
import { size } from "../../support";

import { Icon } from ".";

describe(Icon, () => {
  renders(Icon, ".icon");
  size(Icon);
  property("color", Icon, { color: "info" }, ".has-text-info");
  property("alignment", Icon, { alignment: "left" }, ".is-left");
  property("alignment", Icon, { alignment: "right" }, ".is-right");
});
