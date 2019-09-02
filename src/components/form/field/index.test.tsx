import { shallow } from "enzyme";
import * as React from "react";

import { Field } from ".";

describe(Field, () => {
  it("renders", () => {
    const wrapper = shallow(<Field>Hello!</Field>);
    expect(wrapper.find(".field").text()).toEqual("Hello!");
  });

  it("renders with 'grouped'", () => {
    const wrapper = shallow(<Field grouped />);
    expect(wrapper.exists(".field.is-grouped")).toBeTruthy();
  });
});
