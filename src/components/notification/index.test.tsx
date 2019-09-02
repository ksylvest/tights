import { renders } from "../../support";
import { color } from "../../support";

import { Notification } from ".";

describe(Notification, () => {
  renders(Notification, ".notification");
  color(Notification);
});
