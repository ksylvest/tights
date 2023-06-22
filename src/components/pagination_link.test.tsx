import { renders } from "../support";
import { is } from "../support";

import { PaginationLink } from "./pagination_link";

describe(PaginationLink, () => {
  renders(PaginationLink, ".pagination-link");
  is(PaginationLink, "current");
});
