import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";

import { PanelBlock } from "./panel_block";
import { PanelHeading } from "./panel_heading";
import { PanelIcon } from "./panel_icon";
import { PanelTabs } from "./panel_tabs";

type Props = {
  color?: Color;
};

const Panel: FC<Omit<JSX.IntrinsicElements["nav"], keyof Props> & Props> = ({
  color,
  className,
  ...props
}) => (
  <nav {...props} className={cn("panel", color && `is-${color}`, className)} />
);

const Combined = Object.assign(Panel, {
  Block: PanelBlock,
  Heading: PanelHeading,
  Icon: PanelIcon,
  Tabs: PanelTabs,
});

export { Combined as Panel };
