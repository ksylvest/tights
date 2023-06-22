import { is } from "../../../support";
import { renders } from "../../../support";

import { BreadcrumbItem } from "./index";

describe(BreadcrumbItem, () => {
  renders(BreadcrumbItem, "li");
  is(BreadcrumbItem, "active");
});
