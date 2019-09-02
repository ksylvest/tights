import { shallow } from "enzyme";
import * as React from "react";

import { Link } from ".";

describe(Link, () => {
  it("renders", () => {
    const wrapper = shallow(<Link>Hello!</Link>);
    expect(wrapper.find(".navbar-link").text()).toEqual("Hello!");
  });
});
