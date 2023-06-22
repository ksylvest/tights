import cn from "classnames";
import type { FC } from "react";

export const Input: FC<JSX.IntrinsicElements["input"]> = ({
  className,
  ...props
}) => <input {...props} type="file" className={cn("file-input", className)} />;
