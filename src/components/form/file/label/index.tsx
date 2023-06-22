import cn from "classnames";
import type { FC } from "react";

export const FileLabel: FC<JSX.IntrinsicElements["label"]> = ({
  className,
  ...props
}) => <label {...props} className={cn("file-label", className)} />;
