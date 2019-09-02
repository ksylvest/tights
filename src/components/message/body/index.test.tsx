import { shallow } from "enzyme";
import * as React from "react";

import { Body } from ".";

describe(Body, () => {
  it("renders", () => {
    const wrapper = shallow(<Body>Hello!</Body>);
    expect(wrapper.find(".message-body").text()).toEqual("Hello!");
  });
});
