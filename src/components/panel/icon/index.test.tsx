import { shallow } from "enzyme";
import * as React from "react";

import { Icon } from ".";

describe(Icon, () => {
  it("renders", () => {
    const wrapper = shallow(<Icon>Hello!</Icon>);
    expect(wrapper.find(".panel-icon").text()).toEqual("Hello!");
  });
});
