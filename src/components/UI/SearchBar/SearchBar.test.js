import React from "react";
import { mount } from "enzyme";
import SearchBar from "./SearchBar";
import Root from "../../../Root";
import Icon from '../Icons/Icon/Icon';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SearchBar />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("should render input and a button", () => {
  expect(wrapped.find("input").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("should render icon with class '.search'", () => {
    expect(wrapped.find(Icon).length).toEqual(1);
    expect(wrapped.find(".search").length).toEqual(1);
  });

it("should have input with starting value 'meat'", () => {
  expect(wrapped.find("input").prop("value")).toEqual("meat");
});

it("should have value of user value typed when submitted", () => {
  wrapped.find("form").simulate("submit");
  wrapped.find("input").simulate("change", {
    target: { value: "pizza" }
  });
  wrapped.update();
  expect(wrapped.find("input").prop("value")).toEqual("pizza");
});
