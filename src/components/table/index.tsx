import cn from "classnames";
import React from "react";

import { Container } from "./container";

const Table: React.FC<{
  bordered?: boolean;
  fullwidth?: boolean;
  hoverable?: boolean;
  striped?: boolean;
  children?: React.ReactNode;
}> = ({ bordered, fullwidth, hoverable, striped, ...props }) => (
  <table
    {...props}
    className={cn(
      "table",
      bordered && "is-bordered",
      fullwidth && "is-fullwidth",
      hoverable && "is-hoverable",
      striped && "is-striped"
    )}
  />
);

const Combined = Object.assign(Table, {
  Container,
});

export { Combined as Table };
