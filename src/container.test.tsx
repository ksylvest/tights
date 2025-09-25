import { describe } from "vitest";

import { renders } from "./support";

import { Container } from "./container";

describe(Container, () => {
  renders(Container, ".container");
});
