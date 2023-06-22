import { renders } from "../../../support";
import { is } from "../../../support";

import { PaginationLink } from "./index";

describe(PaginationLink, () => {
  renders(PaginationLink, ".pagination-link");
  is(PaginationLink, "current");
});
