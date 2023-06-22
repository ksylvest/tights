import { renders } from "../../support";
import { color } from "../../support";
import { size } from "../../support";
import { is } from "../../support";

import { Hero } from "./index";

describe(Hero, () => {
  renders(Hero, ".hero");
  color(Hero);
  size(Hero);
  is(Hero, "bold");
});
