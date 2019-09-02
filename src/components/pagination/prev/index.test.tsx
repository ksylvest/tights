import { shallow } from "enzyme";
import * as React from "react";

import { Prev } from ".";

describe(Prev, () => {
  it("renders", () => {
    const wrapper = shallow(<Prev href="#">Hello!</Prev>);
    expect(wrapper.find(".pagination-previous").text()).toEqual("Hello!");
  });
});
