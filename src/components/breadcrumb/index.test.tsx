import { shallow } from "enzyme";
import * as React from "react";

import { Breadcrumb } from ".";

describe(Breadcrumb, () => {
  it("renders", () => {
    const wrapper = shallow(<Breadcrumb>Hello!</Breadcrumb>);
    expect(wrapper.find(".breadcrumb").text()).toEqual("Hello!");
  });

  it("renders with 'alignment'", () => {
    const wrapper = shallow(<Breadcrumb alignment="centered" />);
    expect(wrapper.exists(".breadcrumb.is-centered")).toBeTruthy();
  });

  it("renders with 'separator'", () => {
    const wrapper = shallow(<Breadcrumb separator="dot" />);
    expect(wrapper.exists(".breadcrumb.has-dot-separator")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Breadcrumb size="medium" />);
    expect(wrapper.exists(".breadcrumb.is-medium")).toBeTruthy();
  });
});
