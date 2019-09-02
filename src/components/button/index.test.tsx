import { shallow } from "enzyme";
import * as React from "react";

import { Button } from ".";

describe(Button, () => {
  it("renders", () => {
    const wrapper = shallow(<Button>Hello!</Button>);
    expect(wrapper.find(".button").text()).toEqual("Hello!");
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Button color="info" />);
    expect(wrapper.exists(".button.is-info")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Button size="medium" />);
    expect(wrapper.exists(".button.is-medium")).toBeTruthy();
  });

  it("renders with 'fullwidth'", () => {
    const wrapper = shallow(<Button fullwidth />);
    expect(wrapper.exists(".button.is-fullwidth")).toBeTruthy();
  });

  it("renders with 'inverted'", () => {
    const wrapper = shallow(<Button inverted />);
    expect(wrapper.exists(".button.is-inverted")).toBeTruthy();
  });

  it("renders with 'loading'", () => {
    const wrapper = shallow(<Button loading />);
    expect(wrapper.exists(".button.is-loading")).toBeTruthy();
  });

  it("renders with 'outlined'", () => {
    const wrapper = shallow(<Button outlined />);
    expect(wrapper.exists(".button.is-outlined")).toBeTruthy();
  });

  it("renders with 'rounded'", () => {
    const wrapper = shallow(<Button rounded />);
    expect(wrapper.exists(".button.is-rounded")).toBeTruthy();
  });

  it("renders with 'selected'", () => {
    const wrapper = shallow(<Button selected />);
    expect(wrapper.exists(".button.is-selected")).toBeTruthy();
  });

  it("clicks", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick} />);
    wrapper.find(".button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
