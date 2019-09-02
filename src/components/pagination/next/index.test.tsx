import { shallow } from "enzyme";
import * as React from "react";

import { Next } from ".";

describe(Next, () => {
  it("renders", () => {
    const wrapper = shallow(<Next href="#">Hello!</Next>);
    expect(wrapper.find(".pagination-next").text()).toEqual("Hello!");
  });
});
