import * as React from "react";

import { Body } from "./body";
import { Foot } from "./foot";
import { Head } from "./head";
import { Title } from "./title";

const Card: React.FC = (props) => <div {...props} className="modal-card" />;

const Combined = Object.assign(Card, {
  Body,
  Foot,
  Head,
  Title,
});

export { Combined as Card };
