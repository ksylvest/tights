import { describe } from "vitest";

import { renders } from "./support";

import { CardFooterItem } from "./card_footer_item";

describe(CardFooterItem, () => {
  renders(CardFooterItem, ".card-footer-item");
});
