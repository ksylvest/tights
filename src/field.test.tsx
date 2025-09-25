import { describe } from "vitest";

import { renders } from "./support";
import { property } from "./support";

import { Field } from "./field";

describe(Field, () => {
  renders(Field, ".field");
  property("grouped", Field, { grouped: true }, ".is-grouped");
  property("grouped", Field, { grouped: false }, ":not(.is-grouped)");
});
