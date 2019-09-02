import { shallow } from "enzyme";
import * as React from "react";

import { Item } from ".";

describe(Item, () => {
  it("renders", () => {
    const wrapper = shallow(<Item>Hello!</Item>);
    expect(wrapper.find(".dropdown-item").text()).toEqual("Hello!");
  });

  it("renders with 'active'", () => {
    const wrapper = shallow(<Item active />);
    expect(wrapper.exists(".dropdown-item.is-active")).toBeTruthy();
  });
});
