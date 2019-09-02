import { shallow } from "enzyme";
import * as React from "react";

import { Media } from ".";

describe(Media, () => {
  it("renders", () => {
    const wrapper = shallow(<Media>Hello!</Media>);
    expect(wrapper.find(".media").text()).toEqual("Hello!");
  });
});
