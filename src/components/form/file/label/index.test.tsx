import { shallow } from "enzyme";
import * as React from "react";

import { Label } from ".";

describe(Label, () => {
  it("renders", () => {
    const wrapper = shallow(<Label>Hello!</Label>);
    expect(wrapper.find(".file-label").text()).toEqual("Hello!");
  });
});
