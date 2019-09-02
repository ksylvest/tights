import { renders } from "../../../support";
import { size } from "../../../support";

import { Close } from ".";

describe(Close, () => {
  renders(Close, ".modal-close");
  size(Close);
});
