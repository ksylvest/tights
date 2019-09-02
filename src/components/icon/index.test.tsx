import { shallow } from "enzyme";
import * as React from "react";

import { Icon } from ".";

describe(Icon, () => {
  it("renders", () => {
    const wrapper = shallow(<Icon>Hello!</Icon>);
    expect(wrapper.find(".icon").text()).toEqual("Hello!");
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Icon color="info" />);
    expect(wrapper.exists(".icon.has-text-info")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Icon size="medium" />);
    expect(wrapper.exists(".icon.is-medium")).toBeTruthy();
  });
});
