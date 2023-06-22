import { renders } from "../../support";
import { size } from "../../support";
import { is } from "../../support";

import { Pagination } from "./index";

describe(Pagination, () => {
  renders(Pagination, ".pagination");
  is(Pagination, "rounded");
  size(Pagination);
});
