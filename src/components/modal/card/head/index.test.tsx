import { shallow } from "enzyme";
import * as React from "react";

import { Head } from ".";

describe(Head, () => {
  it("renders", () => {
    const wrapper = shallow(<Head>Hello!</Head>);
    expect(wrapper.find(".modal-card-head").text()).toEqual("Hello!");
  });
});
