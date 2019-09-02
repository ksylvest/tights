import { shallow } from "enzyme";
import * as React from "react";

import { Content } from ".";

describe(Content, () => {
  it("renders", () => {
    const wrapper = shallow(<Content>Hello!</Content>);
    expect(wrapper.find(".modal-content").text()).toEqual("Hello!");
  });
});
