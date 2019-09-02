import { shallow } from "enzyme";
import * as React from "react";

import { Ellipsis } from ".";

describe(Ellipsis, () => {
  it("renders", () => {
    const wrapper = shallow(<Ellipsis />);
    expect(wrapper.find(".pagination-ellipsis").text()).toEqual("…");
  });
});
