import { describe } from "vitest";

import { renders } from "./support";

import { ModalBackground } from "./modal_background";

describe(ModalBackground, () => {
  renders(ModalBackground, ".modal-background");
});
