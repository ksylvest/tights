import { shallow } from "enzyme";
import * as React from "react";

import { Subtitle } from ".";

describe(Subtitle, () => {
  it("renders", () => {
    const wrapper = shallow(<Subtitle>Hello!</Subtitle>);
    expect(wrapper.find(".subtitle").text()).toEqual("Hello!");
  });

  it("renders with 'tag'", () => {
    const wrapper = shallow(<Subtitle tag="p" />);
    expect(wrapper.exists("p.subtitle")).toBeTruthy();
  });
});
