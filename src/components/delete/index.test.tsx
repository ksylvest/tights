import { shallow } from "enzyme";
import * as React from "react";

import { Delete } from ".";

describe(Delete, () => {
  it("renders", () => {
    const wrapper = shallow(<Delete />);
    expect(wrapper.exists(".delete")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Delete size="medium" />);
    expect(wrapper.exists(".delete.is-medium")).toBeTruthy();
  });

  it("clicks", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Delete onClick={onClick} />);
    wrapper.find(".delete").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
