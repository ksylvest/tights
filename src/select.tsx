import type { ComponentProps, FC } from "react";

export const Select: FC<ComponentProps<"select">> = (props) => (
  <div className="select">
    <select {...props} />
  </div>
);
