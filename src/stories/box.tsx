import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Box } from "../components";

const stories = storiesOf("Elements|Box", module);

stories.add("Basic", () => <Box>Box</Box>);
