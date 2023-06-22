import cn from "classnames";
import type { FC } from "react";

import { Background } from "./background";
import { Card } from "./card";
import { Close } from "./close";
import { Content } from "./content";

const DEFAULT_ACTIVE = true;

type Props = {
  active?: boolean;
};

const Modal: FC<Omit<JSX.IntrinsicElements["div"], keyof Props> & Props> = ({
  active = DEFAULT_ACTIVE,
  className,
  ...props
}) => (
  <div {...props} className={cn("modal", active && "is-active", className)} />
);

const Combined = Object.assign(Modal, {
  Background,
  Card,
  Close,
  Content,
});

export { Combined as Modal };
