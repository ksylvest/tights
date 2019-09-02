import { shallow } from "enzyme";
import * as React from "react";

import { Footer } from ".";

describe(Footer, () => {
  it("renders", () => {
    const wrapper = shallow(<Footer>Hello!</Footer>);
    expect(wrapper.find(".card-footer").text()).toEqual("Hello!");
  });
});
