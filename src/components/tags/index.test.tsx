import { shallow } from "enzyme";
import * as React from "react";

import { Tags } from ".";

describe(Tags, () => {
  it("renders", () => {
    const wrapper = shallow(<Tags>Hello!</Tags>);
    expect(wrapper.find(".tags").text()).toEqual("Hello!");
  });

  it("renders with 'addons'", () => {
    const wrapper = shallow(<Tags addons />);
    expect(wrapper.exists(".tags.has-addons")).toBeTruthy();
  });
});
