import { renders } from "../support";
import { tag } from "../support";

import { Subtitle } from "./subtitle";

describe(Subtitle, () => {
  renders(Subtitle, ".subtitle");
  tag(Subtitle);
});
