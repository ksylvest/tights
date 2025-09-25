import { describe } from "vitest";

import { renders } from "./support";

import { ModalCardFoot } from "./modal_card_foot";

describe(ModalCardFoot, () => {
  renders(ModalCardFoot, ".modal-card-foot");
});
