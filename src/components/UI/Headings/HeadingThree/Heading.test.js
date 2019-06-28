import React from "react";
import { shallow } from "enzyme";
import Heading from './Heading';

it("renders <h3></h3>", () => {
    const wrapped = shallow(<Heading />);
    expect(wrapped.find('h3').length).toEqual(1);
  });