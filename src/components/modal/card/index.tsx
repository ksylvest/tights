import cn from "classnames";
import type { FC } from "react";

import { Body } from "./body";
import { Foot } from "./foot";
import { Head } from "./head";
import { Title } from "./title";

const Card: FC<JSX.IntrinsicElements["div"]> = ({ className, ...props }) => (
  <div {...props} className={cn("modal-card", className)} />
);

const Combined = Object.assign(Card, {
  Body,
  Foot,
  Head,
  Title,
});

export { Combined as Card };
