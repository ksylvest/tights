import { is } from "./support";
import { renders } from "./support";

import { BreadcrumbItem } from "./breadcrumb_item";

describe(BreadcrumbItem, () => {
  renders(BreadcrumbItem, "li");
  is(BreadcrumbItem, "active");
});
