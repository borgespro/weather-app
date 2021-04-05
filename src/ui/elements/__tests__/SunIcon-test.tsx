import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SunIcon from '@/ui/elements/SunIcon';

describe('SunIcon Element', () => {
  it('should render without issues', () => {
    const component = shallow(<SunIcon />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
