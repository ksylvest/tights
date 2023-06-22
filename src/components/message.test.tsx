import { renders } from "../support";
import { color } from "../support";
import { size } from "../support";

import { Message } from "./message";

describe(Message, () => {
  renders(Message, ".message");
  color(Message);
  size(Message);
});
