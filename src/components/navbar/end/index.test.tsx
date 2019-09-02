import { shallow } from "enzyme";
import * as React from "react";

import { End } from ".";

describe(End, () => {
  it("renders", () => {
    const wrapper = shallow(<End>Hello!</End>);
    expect(wrapper.find(".navbar-end").text()).toEqual("Hello!");
  });
});
