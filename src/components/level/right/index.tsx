import cn from "classnames";
import type { FC } from "react";

export const Right: FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="level-right" />;
