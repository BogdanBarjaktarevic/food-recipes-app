import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Homepage from "../pages/Homepage";

it("renders Homepage", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Homepage).length).toEqual(1);
});