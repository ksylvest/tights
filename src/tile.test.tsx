import { renders } from "./support";
import { property } from "./support";

import { Tile } from "./tile";

describe(Tile, () => {
  renders(Tile, ".tile");
  property("ancestor", Tile, { ancestor: true }, ".is-ancestor");
  property("ancestor", Tile, { ancestor: false }, ":not(.is-ancestor)");
  property("parent", Tile, { parent: true }, ".is-parent");
  property("parent", Tile, { parent: false }, ":not(.is-parent)");
  property("child", Tile, { child: true }, ".is-child");
  property("child", Tile, { child: false }, ":not(.is-child)");
  property("vertical", Tile, { vertical: true }, ".is-vertical");
  property("vertical", Tile, { vertical: false }, ":not(.is-vertical)");
  property("size", Tile, { size: 2 }, ".is-2");
});
