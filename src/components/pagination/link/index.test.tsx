import { renders } from "../../../support";
import { is } from "../../../support";

import { Link } from ".";

describe(Link, () => {
  renders(Link, ".pagination-link");
  is(Link, "current");
});
