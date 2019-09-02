import { shallow } from "enzyme";
import * as React from "react";

import { Item } from ".";

describe(Item, () => {
  it("renders", () => {
    const wrapper = shallow(<Item>Hello!</Item>);
    expect(wrapper.find("li").text()).toEqual("Hello!");
  });
});
