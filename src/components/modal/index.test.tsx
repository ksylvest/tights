import { shallow } from "enzyme";
import * as React from "react";

import { Modal } from ".";

describe(Modal, () => {
  it("renders", () => {
    const wrapper = shallow(<Modal>Hello!</Modal>);
    expect(wrapper.find(".modal").text()).toEqual("Hello!");
  });

  it(" with 'active'", () => {
    const wrapper = shallow(<Modal active />);
    expect(wrapper.find(".modal.is-active")).toBeTruthy();
  });
});
