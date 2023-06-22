import { renders } from "../../support";
import { tag } from "../../support";

import { Subtitle } from "./index";

describe(Subtitle, () => {
  renders(Subtitle, ".subtitle");
  tag(Subtitle);
});
