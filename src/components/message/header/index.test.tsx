import { shallow } from "enzyme";
import * as React from "react";

import { Header } from ".";

describe(Header, () => {
  it("renders", () => {
    const wrapper = shallow(<Header>Hello!</Header>);
    expect(wrapper.find(".message-header").text()).toEqual("Hello!");
  });
});
