import { render, screen } from "@testing-library/react";
import React from "react";
import type { FC } from "react";

export const property = <T extends Record<string, unknown>>(
  name: string,
  Component: FC<T>,
  props: T,
  selector: string,
): void => {
  it(`renders with '${name}' using '${props}'`, () => {
    const { container } = render(<Component {...props} />);
    expect(container.querySelector(selector)).not.toBe(null);
  });
};
