import { describe } from "vitest";

import { renders } from "./support";

import { PaginationItem } from "./pagination_item";

describe(PaginationItem, () => {
  renders(PaginationItem, "li");
});
