import { shallow } from "enzyme";
import * as React from "react";

import { Hero } from ".";

describe(Hero, () => {
  it("renders", () => {
    const wrapper = shallow(<Hero>Hello!</Hero>);
    expect(wrapper.find(".hero").text()).toEqual("Hello!");
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Hero color="info" />);
    expect(wrapper.exists(".hero.is-info")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Hero size="medium" />);
    expect(wrapper.exists(".hero.is-medium")).toBeTruthy();
  });

  it("renders with 'bold'", () => {
    const wrapper = shallow(<Hero bold />);
    expect(wrapper.exists(".hero.is-bold")).toBeTruthy();
  });
});
