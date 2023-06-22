import { renders } from "./support";
import { size } from "./support";

import { Delete } from "./delete";

describe(Delete, () => {
  renders(Delete, ".delete");
  size(Delete);
});
