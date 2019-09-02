import { shallow } from "enzyme";
import * as React from "react";

import { Heading } from ".";

describe(Heading, () => {
  it("renders", () => {
    const wrapper = shallow(<Heading>Hello!</Heading>);
    expect(wrapper.find(".panel-heading").text()).toEqual("Hello!");
  });
});
