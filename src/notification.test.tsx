import { describe } from "vitest";

import { renders } from "./support";
import { color } from "./support";

import { Notification } from "./notification";

describe(Notification, () => {
  renders(Notification, ".notification");
  color(Notification);
});
