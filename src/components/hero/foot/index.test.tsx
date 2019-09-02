import { shallow } from "enzyme";
import * as React from "react";

import { Foot } from ".";

describe(Foot, () => {
  it("renders", () => {
    const wrapper = shallow(<Foot>Hello!</Foot>);
    expect(wrapper.find(".hero-foot").text()).toEqual("Hello!");
  });
});
