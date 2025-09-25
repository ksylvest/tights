import { describe } from "vitest";

import { renders } from "./support";
import { tag } from "./support";

import { Title } from "./title";

describe(Title, () => {
  renders(Title, ".title");
  tag(Title);
});
