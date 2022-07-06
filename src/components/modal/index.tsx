import cn from "classnames";
import * as React from "react";

import { Background } from "./background";
import { Card } from "./card";
import { Close } from "./close";
import { Content } from "./content";

const DEFAULT_ACTIVE = true;

const Modal: React.FC<{
  active?: boolean;
  children?: React.ReactNode;
}> = ({ active = DEFAULT_ACTIVE, ...props }) => (
  <div {...props} className={cn("modal", active && "is-active")} />
);

const Combined = Object.assign(Modal, {
  Background,
  Card,
  Close,
  Content,
});

export { Combined as Modal };
