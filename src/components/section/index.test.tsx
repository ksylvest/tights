import { shallow } from "enzyme";
import * as React from "react";

import { Section } from ".";

describe(Section, () => {
  it("renders", () => {
    const wrapper = shallow(<Section>Hello!</Section>);
    expect(wrapper.find(".section").text()).toEqual("Hello!");
  });
});
