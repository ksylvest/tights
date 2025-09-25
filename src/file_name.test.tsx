import { describe } from "vitest";

import { renders } from "./support";

import { FileName } from "./file_name";

describe(FileName, () => {
  renders(FileName, ".file-name");
});
