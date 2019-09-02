import { shallow } from "enzyme";
import * as React from "react";

import { Name } from ".";

describe(Name, () => {
  it("renders", () => {
    const wrapper = shallow(<Name>Hello!</Name>);
    expect(wrapper.find(".file-name").text()).toEqual("Hello!");
  });
});
