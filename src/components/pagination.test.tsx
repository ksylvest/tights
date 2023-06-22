import { renders } from "../support";
import { size } from "../support";
import { is } from "../support";

import { Pagination } from "./pagination";

describe(Pagination, () => {
  renders(Pagination, ".pagination");
  is(Pagination, "rounded");
  size(Pagination);
});
