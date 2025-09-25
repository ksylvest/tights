import { describe } from "vitest";

import { renders } from "./support";

import { Card } from "./card";

describe(Card, () => {
  renders(Card, ".card");
});
