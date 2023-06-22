import cn from "classnames";
import type { FC } from "react";

import { DropdownContent } from "./dropdown_content";
import { DropdownDivider } from "./dropdown_divider";
import { DropdownItem } from "./dropdown_item";
import { DropdownMenu } from "./dropdown_menu";
import { DropdownTrigger } from "./dropdown_trigger";

type Props = {
  alignment?: "right" | "left";
  active?: boolean;
  hoverable?: boolean;
};

const Dropdown: FC<Omit<JSX.IntrinsicElements["div"], keyof Props> & Props> = ({
  alignment,
  active,
  hoverable,
  className,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      "dropdown",
      active && "is-active",
      hoverable && "is-hoverable",
      alignment && `is-${alignment}`,
      className
    )}
  />
);

const Combined = Object.assign(Dropdown, {
  Content: DropdownContent,
  Divider: DropdownDivider,
  Item: DropdownItem,
  Menu: DropdownMenu,
  Trigger: DropdownTrigger,
});

export { Combined as Dropdown };
