import { shallow } from "enzyme";
import * as React from "react";

import { Input } from ".";

describe(Input, () => {
  it("renders", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.exists(".input")).toBeTruthy();
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Input color="info" />);
    expect(wrapper.exists(".input.is-info")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Input size="medium" />);
    expect(wrapper.exists(".input.is-medium")).toBeTruthy();
  });

  it("renders with 'rounded'", () => {
    const wrapper = shallow(<Input rounded />);
    expect(wrapper.exists(".input.is-rounded")).toBeTruthy();
  });
});
