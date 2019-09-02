import { shallow } from "enzyme";
import * as React from "react";

import { Close } from ".";

describe(Close, () => {
  it("renders", () => {
    const wrapper = shallow(<Close>Hello!</Close>);
    expect(wrapper.exists(".modal-close")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Close size="medium" />);
    expect(wrapper.exists(".modal-close.is-medium")).toBeTruthy();
  });

  it("clicks", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Close onClick={onClick} />);
    wrapper.find(".modal-close").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
