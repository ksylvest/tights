import cn from "classnames";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  InputHTMLAttributes,
} from "react";

import type { Color } from "../types/color";
import type { Size } from "../types/size";

type ComponentProps = {
  color?: Color;
  size?: Size;
  fullwidth?: boolean;
  inverted?: boolean;
  loading?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  selected?: boolean;
};

type AnchorElementProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  tag: "a";
};

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tag?: "button";
};

type InputElementProps = InputHTMLAttributes<HTMLInputElement> & {
  tag: "input";
};

type ElementProps = ButtonElementProps | AnchorElementProps | InputElementProps;

export const Button: FC<
  Omit<ElementProps, keyof ComponentProps> & ComponentProps
> = ({
  color,
  size,
  fullwidth,
  inverted,
  outlined,
  loading,
  rounded,
  selected,
  className,
  tag: Tag = "button",
  ...props
}) => (
  <Tag
    {...(props as React.HTMLAttributes<HTMLElement>)}
    className={cn(
      "button",
      color && `is-${color}`,
      size && `is-${size}`,
      fullwidth && "is-fullwidth",
      inverted && "is-inverted",
      outlined && "is-outlined",
      loading && "is-loading",
      rounded && "is-rounded",
      selected && "is-selected",
      className
    )}
  />
);
