import { describe } from "vitest";

import { renders } from "./support";
import { is } from "./support";
import { color } from "./support";
import { size } from "./support";
import { property } from "./support";

import { Tag } from "./tag";

describe(Tag, () => {
  renders(Tag, ".tag");
  is(Tag, "rounded");
  color(Tag);
  size(Tag);
  property("delete", Tag, { delete: true }, ".is-delete");
  property("delete", Tag, { delete: false }, ":not(.is-delete)");
});
