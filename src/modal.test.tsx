import { describe } from "vitest";

import { renders } from "./support";
import { is } from "./support";

import { Modal } from "./modal";

describe(Modal, () => {
  renders(Modal, ".modal");
  is(Modal, "active");
});
