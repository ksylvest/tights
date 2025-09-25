import { describe } from "vitest";

import { alignment } from "./support";
import { renders } from "./support";
import { separator } from "./support";
import { size } from "./support";

import { Breadcrumb } from "./breadcrumb";

describe(Breadcrumb, () => {
  renders(Breadcrumb, ".breadcrumb");
  alignment(Breadcrumb);
  separator(Breadcrumb);
  size(Breadcrumb);
});
