import { property } from "./support";

import { Typography } from "./typography";

describe(Typography, () => {
  property(
    "alignment",
    Typography,
    { alignment: "justified" },
    ".has-text-justified",
  );
  property("size", Typography, { size: 2 }, ".is-size-2");
  property("capitalized", Typography, { capitalized: true }, ".is-capitalized");
  property(
    "capitalized",
    Typography,
    { capitalized: false },
    ":not(.is-capitalized)",
  );
  property("lowercase", Typography, { lowercase: true }, ".is-lowercase");
  property(
    "lowercase",
    Typography,
    { lowercase: false },
    ":not(.is-lowercase)",
  );
  property("uppercase", Typography, { uppercase: true }, ".is-uppercase");
  property(
    "uppercase",
    Typography,
    { uppercase: false },
    ":not(.is-uppercase)",
  );
  property("italic", Typography, { italic: true }, ".is-italic");
  property("italic", Typography, { italic: false }, ":not(.is-italic)");
  property("underlined", Typography, { underlined: true }, ".is-underlined");
  property(
    "underlined",
    Typography,
    { underlined: false },
    ":not(.is-underlined)",
  );
});
