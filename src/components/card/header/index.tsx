import cn from "classnames";
import type { FC } from "react";

import { Icon } from "./icon";
import { Title } from "./title";

const Content: FC<JSX.IntrinsicElements["header"]> = ({
  className,
  ...props
}) => <header {...props} className={cn("card-header", className)} />;

const Combined = Object.assign(Content, {
  Icon,
  Title,
});
export { Combined as Header };
