import { renders } from "../../support";
import { has } from "../../support";

import { Tags } from ".";

describe(Tags, () => {
  renders(Tags, ".tags");
  has(Tags, "addons");
});
