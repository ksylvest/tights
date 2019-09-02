import { shallow } from "enzyme";
import * as React from "react";

import { Notification } from ".";

describe(Notification, () => {
  it("renders", () => {
    const wrapper = shallow(<Notification>Hello!</Notification>);
    expect(wrapper.find(".notification").text()).toEqual("Hello!");
  });

  it("renders with 'color'", () => {
    const wrapper = shallow(<Notification color="info" />);
    expect(wrapper.exists(".notification.is-info")).toBeTruthy();
  });
});
