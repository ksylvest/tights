import { shallow } from "enzyme";
import * as React from "react";

import { Menu } from ".";

describe(Menu, () => {
  it("renders", () => {
    const wrapper = shallow(<Menu>Hello!</Menu>);
    expect(wrapper.find(".menu").text()).toEqual("Hello!");
  });
});
