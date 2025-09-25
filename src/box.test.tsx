import { describe } from "vitest";

import { renders } from "./support";

import { Box } from "./box";

describe(Box, () => {
  renders(Box, ".box");
});
