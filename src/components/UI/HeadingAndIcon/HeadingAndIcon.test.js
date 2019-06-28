import React from "react";
import { shallow } from "enzyme";
import Heading from "../Headings/HeadingThree/Heading";
import Icon from "../Icons/Icon/Icon";
import HeadingAndIcon from "./HeadingAndIcon";

it("renders Heading", () => {
  const wrapped = shallow(<HeadingAndIcon />);
  expect(wrapped.find(Heading).length).toEqual(1);
});

it("renders Icon", () => {
  const wrapped = shallow(<HeadingAndIcon />);
  expect(wrapped.find(Icon).length).toEqual(1);
});
