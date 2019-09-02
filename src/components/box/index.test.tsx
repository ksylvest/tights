import { shallow } from "enzyme";
import * as React from "react";

import { Box } from ".";

describe(Box, () => {
  it("renders", () => {
    const wrapper = shallow(<Box>Hello!</Box>);
    const text = wrapper.find(".box").text();
    expect(text).toEqual("Hello!");
  });
});
