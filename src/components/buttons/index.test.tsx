import { shallow } from "enzyme";
import * as React from "react";

import { Buttons } from ".";

describe(Buttons, () => {
  it("renders", () => {
    const wrapper = shallow(<Buttons>Hello!</Buttons>);
    expect(wrapper.find(".buttons").text()).toEqual("Hello!");
  });

  it("renders with 'addons'", () => {
    const wrapper = shallow(<Buttons addons />);
    expect(wrapper.exists(".buttons.has-addons")).toBeTruthy();
  });

  it("renders with 'alignment'", () => {
    const wrapper = shallow(<Buttons alignment="centered" />);
    expect(wrapper.exists(".buttons.is-centered")).toBeTruthy();
  });
});
