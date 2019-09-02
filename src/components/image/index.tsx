import cn from "classnames";
import * as React from "react";

export const Image: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement> & {
    dimensions?: 16 | 24 | 32 | 48 | 64 | 96;
    rounded?: boolean;
    square?: boolean;
    ratio?: string;
  }
> = ({ dimensions, rounded, square, ratio, ...props }) => (
  <figure
    className={cn(
      "image",
      ratio && `is-${ratio}`,
      square && "is-square",
      dimensions && `is-${dimensions}x${dimensions}`,
    )}
  >
    <img {...props} className={cn(rounded && "is-rounded")} />
  </figure>
);
