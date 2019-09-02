import { shallow } from "enzyme";
import * as React from "react";

import { File } from ".";

describe(File, () => {
  it("renders", () => {
    const wrapper = shallow(<File>Hello!</File>);
    expect(wrapper.find(".file").text()).toEqual("Hello!");
  });

  it("renders with 'name'", () => {
    const wrapper = shallow(<File name="file.txt" />);
    expect(wrapper.exists(".file.has-name")).toBeTruthy();
  });

  it("renders with 'alignment'", () => {
    const wrapper = shallow(<File alignment="centered" />);
    expect(wrapper.exists(".file.is-centered")).toBeTruthy();
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<File color="info" />);
    expect(wrapper.exists(".file.is-info")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<File size="medium" />);
    expect(wrapper.exists(".file.is-medium")).toBeTruthy();
  });

  it("renders with 'boxed'", () => {
    const wrapper = shallow(<File boxed />);
    expect(wrapper.exists(".file.is-boxed")).toBeTruthy();
  });

  it("renders with 'fullwidth'", () => {
    const wrapper = shallow(<File fullwidth />);
    expect(wrapper.exists(".file.is-fullwidth")).toBeTruthy();
  });
});
