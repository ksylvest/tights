import { describe } from "vitest";

import { alignment } from "./support";
import { is } from "./support";
import { color } from "./support";
import { property } from "./support";
import { renders } from "./support";
import { size } from "./support";

import { File } from "./file";

describe(File, () => {
  renders(File, ".file");
  alignment(File);
  color(File);
  size(File);
  is(File, "fullwidth");
  is(File, "boxed");
  property("name", File, { name: "file.txt" }, ".has-name");
  property("name", File, { name: undefined }, ":not(.has-name)");
});
