import { shallow } from "enzyme";
import type { FC } from "react";

export const property = <T extends Record<string, unknown>>(
  name: string,
  Component: FC<T>,
  props: T,
  selector: string
): void => {
  it(`renders with '${name}' using '${props}'`, () => {
    const wrapper = shallow(<Component {...props} />);
    expect(wrapper.exists(selector)).toBe(true);
  });
};
