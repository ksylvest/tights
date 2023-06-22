import { renders } from "./support";
import { property } from "./support";
import { is } from "./support";

import { Image } from "./image";

describe(Image, () => {
  renders(Image, ".image");
  is(Image, "rounded");
  is(Image, "square");
  property("dimensions", Image, { dimensions: 32 }, ".is-32x32");
  property("ratio", Image, { ratio: "2-by-3" }, ".is-2-by-3");
});
