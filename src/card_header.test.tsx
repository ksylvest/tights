import { describe } from "vitest";

import { renders } from "./support";

import { CardHeader } from "./card_header";

describe(CardHeader, () => {
  renders(CardHeader, ".card-header");
});
