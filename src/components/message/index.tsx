import cn from "classnames";
import type { FC } from "react";

import { MessageBody } from "./body";
import { MessageHeader } from "./header";

import { Color } from "@src/types/color";
import { Size } from "@src/types/size";

type Props = {
  color?: Color;
  size?: Size;
};

const Message: FC<
  Omit<JSX.IntrinsicElements["article"], keyof Props> & Props
> = ({ color, size, className, ...props }) => (
  <article
    {...props}
    className={cn(
      "message",
      color && `is-${color}`,
      size && `is-${size}`,
      className
    )}
  />
);

const Combined = Object.assign(Message, {
  Body: MessageBody,
  Header: MessageHeader,
});

export { Combined as Message };
