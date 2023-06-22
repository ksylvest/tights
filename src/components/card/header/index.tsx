import cn from "classnames";
import type { FC } from "react";

import { CardHeaderIcon } from "./icon";
import { CardHeaderTitle } from "./title";

const CardHeader: FC<JSX.IntrinsicElements["header"]> = ({
  className,
  ...props
}) => <header {...props} className={cn("card-header", className)} />;

const Combined = Object.assign(CardHeader, {
  Icon: CardHeaderIcon,
  Title: CardHeaderTitle,
});
export { Combined as CardHeader };
