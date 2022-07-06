import * as React from "react";

import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";
import { Image } from "./image";

const Card: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="card" />;

const Combined = Object.assign(Card, {
  Content,
  Footer,
  Header,
  Image,
});

export { Combined as Card };
