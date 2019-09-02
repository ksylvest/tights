import { shallow } from "enzyme";
import * as React from "react";

import { Message } from ".";

describe(Message, () => {
  it("renders", () => {
    const wrapper = shallow(<Message>Hello!</Message>);
    expect(wrapper.find(".message").text()).toEqual("Hello!");
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Message color="info" />);
    expect(wrapper.find(".message.is-info")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Message size="medium" />);
    expect(wrapper.find(".message.is-medium")).toBeTruthy();
  });
});
