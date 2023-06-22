import { renders } from "../../support";
import { is } from "../../support";

import { Table } from "./index";

describe(Table, () => {
  renders(Table, ".table");
  is(Table, "bordered");
  is(Table, "fullwidth");
  is(Table, "hoverable");
  is(Table, "striped");
});
