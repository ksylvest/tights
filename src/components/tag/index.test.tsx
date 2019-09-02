import { shallow } from "enzyme";
import * as React from "react";

import { Tag } from ".";

describe(Tag, () => {
  it("renders", () => {
    const wrapper = shallow(<Tag>Hello!</Tag>);
    expect(wrapper.find(".tag").text()).toEqual("Hello!");
  });

  it("renders with 'delete'", () => {
    const wrapper = shallow(<Tag delete />);
    expect(wrapper.exists(".tag.is-delete")).toBeTruthy();
  });

  it("renders with 'rounded'", () => {
    const wrapper = shallow(<Tag rounded />);
    expect(wrapper.exists(".tag.is-rounded")).toBeTruthy();
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Tag color="info" />);
    expect(wrapper.exists(".tag.is-info")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Tag size="medium" />);
    expect(wrapper.exists(".tag.is-medium")).toBeTruthy();
  });
});
