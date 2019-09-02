import { shallow } from "enzyme";
import * as React from "react";

import { Help } from ".";

describe(Help, () => {
  it("renders", () => {
    const wrapper = shallow(<Help>Hello!</Help>);
    expect(wrapper.find(".help").text()).toEqual("Hello!");
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Help color="info" />);
    expect(wrapper.exists(".help.is-info")).toBeTruthy();
  });
});
