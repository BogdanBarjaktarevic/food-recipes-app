import React from "react";
import { mount, shallow } from "enzyme";
import Root from '../../../Root';
import RecipeCategories from './RecipeCategories';
import Heading from '../../UI/Headings/HeadingThree/Heading';
import Image from '../../UI/Image/Image';
import { fetchRecipes } from '../../../store/actions/index';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <RecipeCategories />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("should render 10 <div class='recipe-categories'></div>", () => {
    expect(wrapped.find('.recipe-categories').length).toEqual(10);
})

it('should render image for every div with class recipe-categories', () => {
    expect(wrapped.find('.recipe-categories').find(Image).length).toEqual(10)
})

it('should render heading for every div with class recipe-categories', () => {
    expect(wrapped.find('.recipe-categories').find(Heading).length).toEqual(10)
})

// it('fasf', () => {
//   const wrapped = shallow(<RecipeCategories />);
//   wrapped.find('.recipe-categories')(0).fetchRecipes = jest.fn()
//   expect(wrapped.find('.recipe-categories')(0).simulate('click'))
//   expect(wrapped.find('.recipe-categories')(0).fetchRecipes).toHaveBeenCalled();
// })