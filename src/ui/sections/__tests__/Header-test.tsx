import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../Header';

describe('Header Element', () => {
  it('should render without issues', () => {
    const component = shallow(<Header />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
