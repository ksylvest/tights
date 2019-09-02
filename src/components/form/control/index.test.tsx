import { shallow } from "enzyme";
import * as React from "react";

import { Control } from ".";

describe(Control, () => {
  it("renders", () => {
    const wrapper = shallow(<Control>Hello!</Control>);
    expect(wrapper.find(".control").text()).toEqual("Hello!");
  });

  it("renders with 'expanded'", () => {
    const wrapper = shallow(<Control expanded />);
    expect(wrapper.exists(".control.is-expanded")).toBeTruthy();
  });

  it("renders with 'icons'", () => {
    const wrapper = shallow(<Control icons="both" />);
    expect(wrapper.exists(".has-icons-left.has-icons-right")).toBeTruthy();
  });
});
