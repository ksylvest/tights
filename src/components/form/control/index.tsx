import cn from "classnames";
import type { FC } from "react";

type Icons = "left" | "right" | "both";

type Props = {
  expanded?: boolean;
  icons?: Icons;
};

export const Control: FC<
  Omit<JSX.IntrinsicElements["div"], keyof Props> & Props
> = ({ expanded, icons, className, ...props }) => (
  <div
    {...props}
    className={cn(
      "control",
      expanded && "is-expanded",
      (icons === "left" || icons === "both") && "has-icons-left",
      (icons === "right" || icons === "both") && "has-icons-right",
      className
    )}
  />
);
