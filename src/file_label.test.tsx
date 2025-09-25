import { describe } from "vitest";

import { renders } from "./support";

import { FileLabel } from "./file_label";

describe(FileLabel, () => {
  renders(FileLabel, ".file-label");
});
