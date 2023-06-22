import cn from "classnames";
import type { FC } from "react";

import { CardHeaderIcon } from "./card_header_icon";
import { CardHeaderTitle } from "./card_header_title";

const CardHeader: FC<JSX.IntrinsicElements["header"]> = ({
  className,
  ...props
}) => <header {...props} className={cn("card-header", className)} />;

const Combined = Object.assign(CardHeader, {
  Icon: CardHeaderIcon,
  Title: CardHeaderTitle,
});
export { Combined as CardHeader };
