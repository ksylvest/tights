import cn from "classnames";
import type { FC } from "react";

import { ModalBackground } from "./modal_background";
import { ModalCard } from "./modal_card";
import { ModalClose } from "./modal_close";
import { ModalContent } from "./modal_content";

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
  Background: ModalBackground,
  Card: ModalCard,
  Close: ModalClose,
  Content: ModalContent,
});

export { Combined as Modal };
