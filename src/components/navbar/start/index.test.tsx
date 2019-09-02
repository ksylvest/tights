import { shallow } from "enzyme";
import * as React from "react";

import { Start } from ".";

describe(Start, () => {
  it("renders", () => {
    const wrapper = shallow(<Start>Hello!</Start>);
    expect(wrapper.find(".navbar-start").text()).toEqual("Hello!");
  });
});
