import { shallow } from "enzyme";
import * as React from "react";

import { Tabs } from ".";

describe(Tabs, () => {
  it("renders", () => {
    const wrapper = shallow(<Tabs>Hello!</Tabs>);
    expect(wrapper.find(".tabs").text()).toEqual("Hello!");
  });

  it("renders with 'alignment'", () => {
    const wrapper = shallow(<Tabs alignment="centered" />);
    expect(wrapper.exists(".tabs.is-centered")).toBeTruthy();
  });

  it("renders with 'style'", () => {
    const wrapper = shallow(<Tabs style="boxed" />);
    expect(wrapper.exists(".tabs.is-boxed")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Tabs size="medium" />);
    expect(wrapper.exists(".tabs.is-medium")).toBeTruthy();
  });

  it("renders with 'fullwidth'", () => {
    const wrapper = shallow(<Tabs fullwidth />);
    expect(wrapper.exists(".tabs.is-fullwidth")).toBeTruthy();
  });
});
