import { shallow } from "enzyme";
import * as React from "react";

import { Menu } from ".";

describe(Menu, () => {
  it("renders", () => {
    const wrapper = shallow(<Menu>Hello!</Menu>);
    expect(wrapper.find(".navbar-menu").text()).toEqual("Hello!");
  });

  it("renders with 'active'", () => {
    const wrapper = shallow(<Menu active />);
    expect(wrapper.exists(".navbar-menu.is-active")).toBeTruthy();
  });
});
