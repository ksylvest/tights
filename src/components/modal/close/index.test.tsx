import { renders } from "../../../support";
import { size } from "../../../support";

import { ModalClose } from "./index";

describe(ModalClose, () => {
  renders(ModalClose, ".modal-close");
  size(ModalClose);
});
