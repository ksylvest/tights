import { describe } from "vitest";

import { renders } from "./support";

import { TableContainer } from "./table_container";

describe(TableContainer, () => {
  renders(TableContainer, ".table-container");
});
