import { describe } from "vitest";

import { renders } from "./support";

import { ModalCard } from "./modal_card";

describe(ModalCard, () => {
  renders(ModalCard, ".modal-card");
});
