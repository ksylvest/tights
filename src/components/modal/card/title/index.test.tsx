import { shallow } from "enzyme";
import * as React from "react";

import { Title } from ".";

describe(Title, () => {
  it("renders", () => {
    const wrapper = shallow(<Title>Hello!</Title>);
    expect(wrapper.find(".modal-card-title").text()).toEqual("Hello!");
  });
});
