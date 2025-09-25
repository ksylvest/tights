import { describe } from "vitest";

import { renders } from "./support";

import { PaginationNext } from "./pagination_next";

describe(PaginationNext, () => {
  renders(PaginationNext, ".pagination-next");
});
