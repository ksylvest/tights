import { shallow } from "enzyme";
import * as React from "react";

import { CTA } from ".";

describe(CTA, () => {
  it("renders", () => {
    const wrapper = shallow(<CTA>Hello!</CTA>);
    expect(wrapper.find(".file-cta").text()).toEqual("Hello!");
  });
});
