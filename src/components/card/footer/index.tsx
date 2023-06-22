import cn from "classnames";
import type { FC } from "react";

import { Item } from "./item";

const Content: FC<JSX.IntrinsicElements["footer"]> = ({
  className,
  ...props
}) => <footer className={cn("card-footer", className)} {...props} />;

const Combined = Object.assign(Content, { Item });
export { Combined as Footer };
