import { shallow } from "enzyme";
import * as React from "react";

import { Card } from ".";

describe(Card, () => {
  it("renders", () => {
    const wrapper = shallow(<Card>Hello!</Card>);
    expect(wrapper.find(".card").text()).toEqual("Hello!");
  });
});
