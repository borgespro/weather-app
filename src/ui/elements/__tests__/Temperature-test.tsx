import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Temperature from '../Temperature';

describe('Temperature Element', () => {
  it('should render without issues', () => {
    const component = shallow(<Temperature degree={30.5} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    const label = component.text();
    expect(label).toEqual(' 31º');
  });
});
