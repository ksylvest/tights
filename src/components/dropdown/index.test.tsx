import { shallow } from "enzyme";
import * as React from "react";

import { Dropdown } from ".";

describe(Dropdown, () => {
  it("renders", () => {
    const wrapper = shallow(<Dropdown>Hello!</Dropdown>);
    expect(wrapper.find(".dropdown").text()).toEqual("Hello!");
  });

  it("renders with 'active'", () => {
    const wrapper = shallow(<Dropdown active />);
    expect(wrapper.exists(".dropdown.is-active")).toBeTruthy();
  });

  it("renders with 'hoverable'", () => {
    const wrapper = shallow(<Dropdown hoverable />);
    expect(wrapper.exists(".dropdown.is-hoverable")).toBeTruthy();
  });

  it("renders with 'alignment' of 'left'", () => {
    const wrapper = shallow(<Dropdown alignment="left" />);
    expect(wrapper.exists(".dropdown.is-left")).toBeTruthy();
  });

  it("renders with 'alignment' of 'right'", () => {
    const wrapper = shallow(<Dropdown alignment="right" />);
    expect(wrapper.exists(".dropdown.is-right")).toBeTruthy();
  });
});
