import cn from "classnames";
import * as React from "react";

import { Color, Size } from "../../types";

const DEFAULT_TAG = "button";

type AnchorElementProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  tag: "a";
};

type ButtonElementProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tag?: "button";
};

type InputElementProps = React.InputHTMLAttributes<HTMLInputElement> & {
  tag: "input";
};

export const Button: React.FC<
  {
    color?: Color;
    size?: Size;
    fullwidth?: boolean;
    inverted?: boolean;
    loading?: boolean;
    outlined?: boolean;
    rounded?: boolean;
    selected?: boolean;
  } & (ButtonElementProps | AnchorElementProps | InputElementProps)
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
  tag: Tag = DEFAULT_TAG,
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
      className,
    )}
  />
);
