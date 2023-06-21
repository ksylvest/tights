import React from "react";

import { Icon } from "./icon";
import { Title } from "./title";

const Content: React.FC<{
  children?: React.ReactNode;
}> = (props) => <header {...props} className="card-header" />;

const Combined = Object.assign(Content, {
  Icon,
  Title,
});
export { Combined as Header };
