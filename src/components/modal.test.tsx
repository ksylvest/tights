import { renders } from "../../support";
import { is } from "../../support";

import { Modal } from "./index";

describe(Modal, () => {
  renders(Modal, ".modal");
  is(Modal, "active");
});
