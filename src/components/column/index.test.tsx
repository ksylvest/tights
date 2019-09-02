import { shallow } from "enzyme";
import * as React from "react";

import { Column } from ".";

describe(Column, () => {
  it("renders", () => {
    const wrapper = shallow(<Column>Hello!</Column>);
    expect(wrapper.find(".column").text()).toEqual("Hello!");
  });

  it("renders with 'narrow'", () => {
    const wrapper = shallow(<Column narrow />);
    expect(wrapper.exists(".column.is-narrow")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Column size={2} />);
    expect(wrapper.exists(".column.is-2")).toBeTruthy();
  });

  it("renders with 'mobile'", () => {
    const wrapper = shallow(<Column mobile={2} />);
    expect(wrapper.exists(".column.is-2-mobile")).toBeTruthy();
  });

  it("renders with 'tablet'", () => {
    const wrapper = shallow(<Column tablet={2} />);
    expect(wrapper.exists(".column.is-2-tablet")).toBeTruthy();
  });

  it("renders with 'desktop'", () => {
    const wrapper = shallow(<Column desktop={2} />);
    expect(wrapper.exists(".column.is-2-desktop")).toBeTruthy();
  });
});
