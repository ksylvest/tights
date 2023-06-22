import cn from "classnames";
import type { FC } from "react";

import { CardContent } from "./card_content";
import { CardFooter } from "./card_footer";
import { CardHeader } from "./card_header";
import { CardImage } from "./card_image";

const Card: FC<JSX.IntrinsicElements["div"]> = ({ className, ...props }) => (
  <div {...props} className={cn("card", className)} />
);

const Combined = Object.assign(Card, {
  Content: CardContent,
  Footer: CardFooter,
  Header: CardHeader,
  Image: CardImage,
});

export { Combined as Card };
