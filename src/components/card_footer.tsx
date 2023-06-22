import cn from "classnames";
import type { FC } from "react";

import { CardFooterItem } from "./card_footer_item";

const CardFooter: FC<JSX.IntrinsicElements["footer"]> = ({
  className,
  ...props
}) => <footer className={cn("card-footer", className)} {...props} />;

const Combined = Object.assign(CardFooter, { Item: CardFooterItem });
export { Combined as CardFooter };
