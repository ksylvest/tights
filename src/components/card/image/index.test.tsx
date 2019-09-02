import { shallow } from "enzyme";
import * as React from "react";

import { Image } from ".";

describe(Image, () => {
  it("renders", () => {
    const wrapper = shallow(<Image>Hello!</Image>);
    expect(wrapper.find(".card-image").text()).toEqual("Hello!");
  });
});
