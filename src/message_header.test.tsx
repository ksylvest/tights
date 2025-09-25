import { describe } from "vitest";

import { renders } from "./support";

import { MessageHeader } from "./message_header";

describe(MessageHeader, () => {
  renders(MessageHeader, ".message-header");
});
