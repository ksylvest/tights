import { shallow } from "enzyme";
import * as React from "react";

import { Body } from ".";

describe(Body, () => {
  it("renders", () => {
    const wrapper = shallow(<Body>Hello!</Body>);
    expect(wrapper.find(".modal-card-body").text()).toEqual("Hello!");
  });
});
