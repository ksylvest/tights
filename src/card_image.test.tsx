import { describe } from "vitest";

import { renders } from "./support";

import { CardImage } from "./card_image";

describe(CardImage, () => {
  renders(CardImage, ".card-image");
});
