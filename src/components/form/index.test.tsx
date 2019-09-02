import { shallow } from "enzyme";
import * as React from "react";

import { Form } from ".";

describe(Form, () => {
  it("renders", () => {
    const wrapper = shallow(<Form>Hello!</Form>);
    expect(wrapper.find("form").text()).toEqual("Hello!");
  });
});
