import { shallow } from "enzyme";
import * as React from "react";

import { Title } from ".";

describe(Title, () => {
  it("renders", () => {
    const wrapper = shallow(<Title>Hello!</Title>);
    expect(wrapper.find(".title").text()).toEqual("Hello!");
  });

  it("renders with 'tag'", () => {
    const wrapper = shallow(<Title tag="p" />);
    expect(wrapper.exists("p.title")).toBeTruthy();
  });
});
