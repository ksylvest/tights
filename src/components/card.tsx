import cn from "classnames";
import type { FC } from "react";

import { CardContent } from "./content";
import { CardFooter } from "./footer";
import { CardHeader } from "./header";
import { CardImage } from "./image";

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
