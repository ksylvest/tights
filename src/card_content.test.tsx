import { describe } from "vitest";

import { renders } from "./support";

import { CardContent } from "./card_content";

describe(CardContent, () => {
  renders(CardContent, ".card-content");
});
