import { shallow } from "enzyme";
import * as React from "react";

import { Item } from ".";

describe(Item, () => {
  it("renders", () => {
    const wrapper = shallow(<Item>Hello!</Item>);
    expect(wrapper.find(".navbar-item").text()).toEqual("Hello!");
  });

  it("renders with 'dropdown'", () => {
    const wrapper = shallow(<Item dropdown />);
    expect(wrapper.exists(".navbar-item.has-dropdown")).toBeTruthy();
  });

  it("renders with 'hoverable'", () => {
    const wrapper = shallow(<Item hoverable />);
    expect(wrapper.exists(".navbar-item.is-hoverable")).toBeTruthy();
  });

  it("renders with 'active'", () => {
    const wrapper = shallow(<Item active />);
    expect(wrapper.exists(".navbar-item.is-active")).toBeTruthy();
  });
});
