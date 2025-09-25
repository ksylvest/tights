import { describe } from "vitest";

import { renders } from "./support";

import { FileInput } from "./file_input";

describe(FileInput, () => {
  renders(FileInput, ".file-input");
});
