import { shallow } from "enzyme";
import * as React from "react";

export const property = <T extends Record<string, unknown>>(
  name: string,
  Component: React.FC<T>,
  props: T,
  selector: string
): void => {
  it(`renders with '${name}' using '${props}'`, () => {
    const wrapper = shallow(<Component {...props} />);
    expect(wrapper.exists(selector)).toBe(true);
  });
};
