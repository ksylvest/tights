import { shallow } from "enzyme";
import * as React from "react";

import { Image } from ".";

describe(Image, () => {
  it("renders", () => {
    const wrapper = shallow(<Image src="/sample.svg" />);
    expect(wrapper.find(".image img").prop("src")).toEqual("/sample.svg");
  });

  it("renders with 'children'", () => {
    const wrapper = shallow(<Image src="/sample.svg" />);
    expect(wrapper.find(".image img").prop("src")).toEqual("/sample.svg");
  });

  it("renders with 'dimensions'", () => {
    const wrapper = shallow(<Image src="/sample.svg" dimensions={32} />);
    expect(wrapper.exists(".image.is-32x32 img")).toBeTruthy();
  });

  it("renders with 'rounded'", () => {
    const wrapper = shallow(<Image src="/sample.svg" rounded />);
    expect(wrapper.exists(".image img.is-rounded")).toBeTruthy();
  });

  it("renders with 'square'", () => {
    const wrapper = shallow(<Image src="/sample.svg" square />);
    expect(wrapper.exists(".image.is-square img")).toBeTruthy();
  });

  it("renders with 'square'", () => {
    const wrapper = shallow(<Image src="/sample.svg" ratio="2-by-3" />);
    expect(wrapper.exists(".image.is-2-by-3 img")).toBeTruthy();
  });
});
