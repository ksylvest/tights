import { shallow } from "enzyme";
import * as React from "react";

import { Pagination } from ".";

describe(Pagination, () => {
  it("renders", () => {
    const wrapper = shallow(<Pagination>Hello!</Pagination>);
    expect(wrapper.find(".pagination").text()).toEqual("Hello!");
  });

  it("renders with 'rounded'", () => {
    const wrapper = shallow(<Pagination rounded />);
    expect(wrapper.exists(".pagination.is-rounded")).toBeTruthy();
  });

  it("renders with 'size'", () => {
    const wrapper = shallow(<Pagination size="medium" />);
    expect(wrapper.exists(".pagination.is-medium")).toBeTruthy();
  });
});
