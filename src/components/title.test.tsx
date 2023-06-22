import { renders } from "../../support";
import { tag } from "../../support";

import { Title } from "./index";

describe(Title, () => {
  renders(Title, ".title");
  tag(Title);
});
