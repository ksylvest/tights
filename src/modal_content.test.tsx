import { describe } from "vitest";

import { renders } from "./support";

import { ModalContent } from "./modal_content";

describe(ModalContent, () => {
  renders(ModalContent, ".modal-content");
});
