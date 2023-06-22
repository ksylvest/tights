import { renders } from "./support";
import { color } from "./support";
import { size } from "./support";
import { is } from "./support";

import { Textarea } from "./textarea";

describe(Textarea, () => {
  renders(Textarea, ".textarea");
  color(Textarea);
  size(Textarea);
  is(Textarea, "rounded");
});
