import { renders } from "./support";
import { has } from "./support";

import { Tags } from "./tags";

describe(Tags, () => {
  renders(Tags, ".tags");
  has(Tags, "addons");
});
