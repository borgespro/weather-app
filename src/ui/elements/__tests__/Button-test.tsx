import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../Button';

describe('Button Element', () => {
  it('should render without issues', () => {
    const onPress = jest.fn();
    const component = shallow(<Button label={'Test'} onPress={onPress} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    const label = component.children().first().text();
    expect(label).toEqual('Test');
  });

  it('should be call onPress events', () => {
    const onPress = jest.fn();
    const wrapper = shallow(<Button label={'Test'} onPress={onPress} />);
    wrapper.props().onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
