import { shallow } from "enzyme";
import * as React from "react";

import { Progress } from ".";

describe(Progress, () => {
  it("renders", () => {
    const wrapper = shallow(<Progress value="50" />);
    expect(wrapper.find(".progress").prop("value")).toEqual("50");
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Progress color="info" />);
    expect(wrapper.exists(".progress.is-info")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Progress size="medium" />);
    expect(wrapper.exists(".progress.is-medium")).toBeTruthy();
  });
});
