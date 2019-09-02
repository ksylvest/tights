import { shallow } from "enzyme";
import * as React from "react";

export const renders = (Component: React.FC, selector: string) => {
  it("renders", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.exists(selector)).toBe(true);
  });
};
