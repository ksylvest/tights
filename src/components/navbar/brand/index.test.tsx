import { shallow } from "enzyme";
import * as React from "react";

import { Brand } from ".";

describe(Brand, () => {
  it("renders", () => {
    const wrapper = shallow(<Brand>Hello!</Brand>);
    expect(wrapper.find(".navbar-brand").text()).toEqual("Hello!");
  });
});
