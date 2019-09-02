import { shallow } from "enzyme";
import * as React from "react";

import { Link } from ".";

describe(Link, () => {
  it("renders", () => {
    const wrapper = shallow(<Link href="#">Hello!</Link>);
    expect(wrapper.find(".pagination-link").text()).toEqual("Hello!");
  });

  it("renders with 'current'", () => {
    const wrapper = shallow(<Link current />);
    expect(wrapper.exists(".pagination-link.is-current")).toBeTruthy();
  });
});
