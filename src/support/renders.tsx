import { shallow } from "enzyme";
import * as React from "react";

export const renders = (Component: React.FC, selector: string): void => {
  it("renders", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.exists(selector)).toBe(true);
  });
};
