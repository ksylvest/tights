import { describe } from "vitest";

import { renders } from "./support";

import { PaginationList } from "./pagination_list";

describe(PaginationList, () => {
  renders(PaginationList, ".pagination-list");
});
