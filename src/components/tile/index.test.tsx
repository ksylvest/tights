import { shallow } from "enzyme";
import * as React from "react";

import { Tile } from ".";

describe(Tile, () => {
  it("renders", () => {
    const wrapper = shallow(<Tile>Hello!</Tile>);
    expect(wrapper.find(".tile").text()).toEqual("Hello!");
  });

  it("renders with 'tag'", () => {
    const wrapper = shallow(<Tile tag="p" />);
    expect(wrapper.exists("p.tile")).toBeTruthy();
  });

  it("renders with 'ancestor'", () => {
    const wrapper = shallow(<Tile ancestor>Hello!</Tile>);
    expect(wrapper.exists(".tile.is-ancestor")).toBeTruthy();
  });

  it("renders with 'parent'", () => {
    const wrapper = shallow(<Tile parent>Hello!</Tile>);
    expect(wrapper.exists(".tile.is-parent")).toBeTruthy();
  });

  it("renders with 'child'", () => {
    const wrapper = shallow(<Tile child>Hello!</Tile>);
    expect(wrapper.exists(".tile.is-child")).toBeTruthy();
  });

  it("renders with 'vertical'", () => {
    const wrapper = shallow(<Tile vertical />);
    expect(wrapper.exists(".tile.is-vertical")).toBeTruthy();
  });

  it("renders a 'size'", () => {
    const wrapper = shallow(<Tile size={2}>Hello!</Tile>);
    expect(wrapper.exists(".tile.is-2")).toBeTruthy();
  });
});
