import { shallow } from "enzyme";
import * as React from "react";

import { Right } from ".";

describe(Right, () => {
  it("renders", () => {
    const wrapper = shallow(<Right>Hello!</Right>);
    expect(wrapper.find(".media-right").text()).toEqual("Hello!");
  });
});
