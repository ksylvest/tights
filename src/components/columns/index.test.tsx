import { property } from "../../support";
import { renders } from "../../support";

import { Columns } from ".";

describe(Columns, () => {
  renders(Columns, ".columns");
  property("mobile", Columns, { mobile: true }, ".is-mobile");
  property("tablet", Columns, { tablet: true }, ".is-tablet");
  property("desktop", Columns, { desktop: true }, ".is-desktop");
  property("centered", Columns, { centered: true }, ".is-centered");
  property("vcentered", Columns, { vcentered: true }, ".is-vcentered");
  property("mulitline", Columns, { multiline: true }, ".is-multiline");
  property("gap", Columns, { gap: "gapless" }, ".is-variable.is-gapless");
});
