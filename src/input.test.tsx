import { renders } from "./support";
import { color } from "./support";
import { size } from "./support";
import { is } from "./support";

import { Input } from "./input";

describe(Input, () => {
  renders(Input, ".input");
  color(Input);
  size(Input);
  is(Input, "rounded");
});
