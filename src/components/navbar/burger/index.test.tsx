import { shallow } from "enzyme";
import * as React from "react";

import { Burger } from ".";

describe(Burger, () => {
  it("renders", () => {
    const wrapper = shallow(<Burger />);
    expect(wrapper.exists(".navbar-burger")).toBeTruthy();
    expect(wrapper.find(".navbar-burger span")).toHaveLength(3);
  });

  it("renders with 'active'", () => {
    const wrapper = shallow(<Burger active />);
    expect(wrapper.exists(".navbar-burger.is-active")).toBeTruthy();
  });

  it("clicks", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Burger onClick={onClick} />);
    wrapper.find(".navbar-burger").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
