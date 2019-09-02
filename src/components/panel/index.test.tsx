import { shallow } from "enzyme";
import * as React from "react";

import { Panel } from ".";

describe(Panel, () => {
  it("renders", () => {
    const wrapper = shallow(<Panel>Hello!</Panel>);
    expect(wrapper.find(".panel").text()).toEqual("Hello!");
  });
});
