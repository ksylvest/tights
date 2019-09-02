import { shallow } from "enzyme";
import * as React from "react";

import { Input } from ".";

describe(Input, () => {
  it("renders", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.exists(".file-input")).toBeTruthy();
  });
});
