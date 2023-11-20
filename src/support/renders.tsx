import { render } from "@testing-library/react";
import React from "react";
import type { FC } from "react";

export const renders = (Component: FC, selector: string): void => {
  it("renders", () => {
    const { container } = render(<Component />);
    expect(container.querySelector(selector)).not.toBe(null);
  });
};
