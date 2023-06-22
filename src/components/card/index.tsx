import cn from "classnames";
import type { FC } from "react";

import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";
import { Image } from "./image";

const Card: FC<JSX.IntrinsicElements["div"]> = ({ className, ...props }) => (
  <div {...props} className={cn("card", className)} />
);

const Combined = Object.assign(Card, {
  Content,
  Footer,
  Header,
  Image,
});

export { Combined as Card };
