import { describe } from "vitest";

import { renders } from "./support";

import { Content } from "./content";

describe(Content, () => {
  renders(Content, ".content");
});
