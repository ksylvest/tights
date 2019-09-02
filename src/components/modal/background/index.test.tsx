import { shallow } from "enzyme";
import * as React from "react";

import { Background } from ".";

describe(Background, () => {
  it("renders", () => {
    const wrapper = shallow(<Background>Hello!</Background>);
    expect(wrapper.exists(".modal-background")).toBeTruthy();
  });
});
