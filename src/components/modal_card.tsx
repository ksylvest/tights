import cn from "classnames";
import type { FC } from "react";

import { ModalCardBody } from "./modal_card_body";
import { ModalCardFoot } from "./modal_card_foot";
import { ModalCardHead } from "./modal_card_head";
import { ModalCardTitle } from "./modal_card_title";

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
