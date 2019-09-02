import { renders } from "../../support";
import { is } from "../../support";

import { Modal } from ".";

describe(Modal, () => {
  renders(Modal, ".modal");
  is(Modal, "active");
});
