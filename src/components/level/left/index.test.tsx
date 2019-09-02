import { shallow } from "enzyme";
import * as React from "react";

import { Left } from ".";

describe(Left, () => {
  it("renders", () => {
    const wrapper = shallow(<Left>Hello!</Left>);
    expect(wrapper.find(".level-left").text()).toEqual("Hello!");
  });
});
