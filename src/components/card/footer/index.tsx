import React from "react";

import { Item } from "./item";

const Content: React.FC<{
  children?: React.ReactNode;
}> = (props) => <footer className="card-footer" {...props} />;

const Combined = Object.assign(Content, { Item });
export { Combined as Footer };
