import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

type Icons = "left" | "right" | "both";

type Props = {
  expanded?: boolean;
  icons?: Icons;
};

export const Control: FC<Omit<ComponentProps<"div">, keyof Props> & Props> = ({
  expanded,
  icons,
  className,
  ...props
}) => (
  <div
    {...props}
    className={clsx(
      "control",
      expanded && "is-expanded",
      (icons === "left" || icons === "both") && "has-icons-left",
      (icons === "right" || icons === "both") && "has-icons-right",
      className,
    )}
  />
);
