import { renders } from "../../support";
import { color } from "../../support";

import { Notification } from "./index";

describe(Notification, () => {
  renders(Notification, ".notification");
  color(Notification);
});
