import { shallow } from "enzyme";
import * as React from "react";

import { Tabs } from ".";

describe(Tabs, () => {
  it("renders", () => {
    const wrapper = shallow(<Tabs>Hello!</Tabs>);
    expect(wrapper.find(".panel-tabs").text()).toEqual("Hello!");
  });
});
