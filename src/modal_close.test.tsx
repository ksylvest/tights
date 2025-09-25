import { describe } from "vitest";

import { renders } from "./support";
import { size } from "./support";

import { ModalClose } from "./modal_close";

describe(ModalClose, () => {
  renders(ModalClose, ".modal-close");
  size(ModalClose);
});
