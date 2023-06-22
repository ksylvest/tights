import cn from "classnames";
import type { FC } from "react";

type Props = {
  bordered?: boolean;
  fullwidth?: boolean;
  hoverable?: boolean;
  striped?: boolean;
};

export const Table: FC<
  Omit<JSX.IntrinsicElements["table"], keyof Props> & Props
> = ({ bordered, fullwidth, hoverable, striped, ...props }) => (
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
