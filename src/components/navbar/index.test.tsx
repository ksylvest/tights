import { shallow } from "enzyme";
import * as React from "react";

import { Navbar } from ".";

describe(Navbar, () => {
  it("renders", () => {
    const wrapper = shallow(<Navbar>Hello!</Navbar>);
    expect(wrapper.find(".navbar").text()).toEqual("Hello!");
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Navbar color="info" />);
    expect(wrapper.exists(".navbar.is-info")).toBeTruthy();
  });
});
