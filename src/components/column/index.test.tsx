import { property } from "../../support";
import { renders } from "../../support";

import { Column } from "./index";

describe(Column, () => {
  renders(Column, ".column");
  property("narrow", Column, { narrow: true }, ".is-narrow");
  property("narrow", Column, { narrow: false }, ":not(.is-narrow)");
  property("size", Column, { size: 2 }, ".is-2");
  property("mobile", Column, { mobile: 2 }, ".is-2-mobile");
  property("tablet", Column, { tablet: 2 }, ".is-2-tablet");
  property("desktop", Column, { desktop: 2 }, ".is-2-desktop");
});
