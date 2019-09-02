import { shallow } from "enzyme";
import * as React from "react";

import { Trigger } from ".";

describe(Trigger, () => {
  it("renders", () => {
    const wrapper = shallow(<Trigger>Hello!</Trigger>);
    expect(wrapper.find(".dropdown-trigger").text()).toEqual("Hello!");
  });
});
