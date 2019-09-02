import { shallow } from "enzyme";
import * as React from "react";

import { Block } from ".";

describe(Block, () => {
  it("renders", () => {
    const wrapper = shallow(<Block>Hello!</Block>);
    expect(wrapper.find(".panel-block").text()).toEqual("Hello!");
  });
});
