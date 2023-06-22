import cn from "classnames";
import type { FC } from "react";

import { ModalCardBody } from "./body";
import { ModalCardFoot } from "./foot";
import { ModalCardHead } from "./head";
import { ModalCardTitle } from "./title";

const ModalCard: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-card", className)} />;

const Combined = Object.assign(ModalCard, {
  Body: ModalCardBody,
  Foot: ModalCardFoot,
  Head: ModalCardHead,
  Title: ModalCardTitle,
});

export { Combined as ModalCard };
