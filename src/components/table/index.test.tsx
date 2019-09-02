import { shallow } from "enzyme";
import * as React from "react";

import { Table } from ".";

describe(Table, () => {
  it("renders", () => {
    const wrapper = shallow(<Table>Hello!</Table>);
    expect(wrapper.find(".table").text()).toEqual("Hello!");
  });

  it("renders with 'bordered'", () => {
    const wrapper = shallow(<Table bordered />);
    expect(wrapper.exists(".table.is-bordered")).toBeTruthy();
  });

  it("renders with 'fullwidth'", () => {
    const wrapper = shallow(<Table fullwidth />);
    expect(wrapper.exists(".table.is-fullwidth")).toBeTruthy();
  });

  it("renders with 'hoverable'", () => {
    const wrapper = shallow(<Table hoverable />);
    expect(wrapper.exists(".table.is-hoverable")).toBeTruthy();
  });

  it("renders with 'striped'", () => {
    const wrapper = shallow(<Table striped />);
    expect(wrapper.exists(".table.is-striped")).toBeTruthy();
  });
});
