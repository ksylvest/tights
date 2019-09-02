import { shallow } from "enzyme";
import * as React from "react";

import { Divider } from ".";

describe(Divider, () => {
  it("renders", () => {
    const wrapper = shallow(<Divider>Hello!</Divider>);
    expect(wrapper.exists(".navbar-divider")).toBeTruthy();
  });
});
