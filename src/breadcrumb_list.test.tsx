import { describe } from "vitest";

import { renders } from "./support";

import { BreadcrumbList } from "./breadcrumb_list";

describe(BreadcrumbList, () => {
  renders(BreadcrumbList, "ul");
});
