import { renders } from "../../support";
import { size } from "../../support";

import { Delete } from "./index";

describe(Delete, () => {
  renders(Delete, ".delete");
  size(Delete);
});
