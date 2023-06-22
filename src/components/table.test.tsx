import { renders } from "../support";
import { is } from "../support";

import { Table } from "./table";

describe(Table, () => {
  renders(Table, ".table");
  is(Table, "bordered");
  is(Table, "fullwidth");
  is(Table, "hoverable");
  is(Table, "striped");
});
