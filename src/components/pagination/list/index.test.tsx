import { shallow } from "enzyme";
import * as React from "react";

import { List } from ".";

describe(List, () => {
  it("renders", () => {
    const wrapper = shallow(<List>Hello!</List>);
    expect(wrapper.find(".pagination-list").text()).toEqual("Hello!");
  });
});
