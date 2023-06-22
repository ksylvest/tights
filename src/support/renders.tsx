import { shallow } from "enzyme";
import cn from "classnames";
import type { FC } from "react";

export const renders = (Component: FC, selector: string): void => {
  it("renders", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.exists(selector)).toBe(true);
  });
};
