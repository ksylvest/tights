import { is } from "../support";
import { property } from "../support";
import { renders } from "../support";

import { Control } from "./control";

describe(Control, () => {
  renders(Control, ".control");
  is(Control, "expanded");
  property(
    "icons",
    Control,
    { icons: "both" },
    ".has-icons-left.has-icons-right"
  );
});
