import { shallow } from "enzyme";
import * as React from "react";

import { Level } from ".";

describe(Level, () => {
  it("renders", () => {
    const wrapper = shallow(<Level>Hello!</Level>);
    expect(wrapper.find(".level").text()).toEqual("Hello!");
  });
});
