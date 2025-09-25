import React from "react";
import type { FC } from "react";

import { expect, it } from "vitest";

import { render } from "@testing-library/react";

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
