import { renders } from "../../support";
import { color } from "../../support";
import { size } from "../../support";

import { Progress } from "./index";

describe(Progress, () => {
  renders(Progress, ".progress");
  color(Progress);
  size(Progress);
});
