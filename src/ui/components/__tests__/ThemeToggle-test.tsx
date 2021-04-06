import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ThemeToggle from '../ThemeToggle';

describe('ThemeToggle Element', () => {
  it('should render without issues', () => {
    const component = shallow(<ThemeToggle />);
    expect(component.length).toBe(1);
    expect(component.children().length).toBe(2);
    expect(toJson(component)).toMatchSnapshot();
  });
});
