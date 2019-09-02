import { shallow } from "enzyme";
import * as React from "react";

import { Container } from ".";

describe(Container, () => {
  it("renders", () => {
    const wrapper = shallow(<Container>Hello!</Container>);
    expect(wrapper.find(".table-container").text()).toEqual("Hello!");
  });
});
