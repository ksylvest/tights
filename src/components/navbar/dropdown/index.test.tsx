import { shallow } from "enzyme";
import * as React from "react";

import { Dropdown } from ".";

describe(Dropdown, () => {
  it("renders", () => {
    const wrapper = shallow(<Dropdown>Hello!</Dropdown>);
    expect(wrapper.find(".navbar-dropdown").text()).toEqual("Hello!");
  });

  it("renders with 'boxed'", () => {
    const wrapper = shallow(<Dropdown boxed />);
    expect(wrapper.exists(".navbar-dropdown.is-boxed")).toBeTruthy();
  });

  it("renders with 'direction' of 'left'", () => {
    const wrapper = shallow(<Dropdown direction="left" />);
    expect(wrapper.exists(".navbar-dropdown.is-left")).toBeTruthy();
  });

  it("renders with 'direction' of 'right'", () => {
    const wrapper = shallow(<Dropdown direction="right" />);
    expect(wrapper.exists(".navbar-dropdown.is-right")).toBeTruthy();
  });
});
