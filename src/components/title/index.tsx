import cn from "classnames";
import type { FC } from "react";

type Props = {
  tag?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

type Element =
  | JSX.IntrinsicElements["div"]
  | JSX.IntrinsicElements["h1"]
  | JSX.IntrinsicElements["h2"]
  | JSX.IntrinsicElements["h3"]
  | JSX.IntrinsicElements["h4"]
  | JSX.IntrinsicElements["h5"]
  | JSX.IntrinsicElements["h6"]
  | JSX.IntrinsicElements["p"];

export const Title: FC<Omit<Element, keyof Props> & Props> = ({
  tag: Tag = "p",
  ...props
}) => <Tag {...props} className="title" />;
