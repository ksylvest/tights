import { color } from "./support";
import { is } from "./support";
import { renders } from "./support";
import { size } from "./support";

import { Button } from "./button";

describe(Button, () => {
  renders(Button, ".button");
  color(Button);
  size(Button);
  is(Button, "fullwidth");
  is(Button, "inverted");
  is(Button, "light");
  is(Button, "loading");
  is(Button, "outlined");
  is(Button, "responsive");
  is(Button, "rounded");
  is(Button, "selected");
});
