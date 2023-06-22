import type { ComponentProps, FC } from "react";

export const FileCTA: FC<ComponentProps<"span">> = (props) => (
  <span {...props} className="file-cta" />
);
