import { shallow } from "enzyme";
import * as React from "react";

import { Columns } from ".";

describe(Columns, () => {
  it("renders", () => {
    const wrapper = shallow(<Columns>Hello!</Columns>);
    expect(wrapper.find(".columns").text()).toEqual("Hello!");
  });

  it("renders with 'mobile'", () => {
    const wrapper = shallow(<Columns mobile />);
    expect(wrapper.exists(".columns.is-mobile")).toBeTruthy();
  });

  it("renders with 'tablet'", () => {
    const wrapper = shallow(<Columns tablet />);
    expect(wrapper.exists(".columns.is-tablet")).toBeTruthy();
  });

  it("renders with 'desktop'", () => {
    const wrapper = shallow(<Columns desktop />);
    expect(wrapper.exists(".columns.is-desktop")).toBeTruthy();
  });

  it("renders with 'centered'", () => {
    const wrapper = shallow(<Columns centered />);
    expect(wrapper.exists(".columns.is-centered")).toBeTruthy();
  });

  it("renders with 'vcentered'", () => {
    const wrapper = shallow(<Columns vcentered />);
    expect(wrapper.exists(".columns.is-vcentered")).toBeTruthy();
  });

  it("renders with 'multiline'", () => {
    const wrapper = shallow(<Columns multiline />);
    expect(wrapper.exists(".columns.is-multiline")).toBeTruthy();
  });

  it("renders with 'gap'", () => {
    const wrapper = shallow(<Columns gap="gapless" />);
    expect(wrapper.exists(".columns.is-variable.is-gapless")).toBeTruthy();
  });
});
