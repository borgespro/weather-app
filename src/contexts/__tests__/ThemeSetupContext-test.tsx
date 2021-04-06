import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { mount } from 'enzyme';

import { ThemeSetupProvider, useThemeSetupContext } from '../ThemeSetupContext';

const HelperComponent = () => {
  const { currentThemeType, toggleCurrentTheme } = useThemeSetupContext();

  return (
    <>
      <Text>{currentThemeType}</Text>
      <TouchableOpacity onPress={toggleCurrentTheme} />
    </>
  );
};

describe('ThemeSetupContext', () => {
  it('should render HelperComponent correctly and toggling should work.', () => {
    const wrapper = mount(
      <ThemeSetupProvider>
        <HelperComponent />
      </ThemeSetupProvider>,
    );
    let helperText = wrapper.find(Text);
    expect(helperText.text()).toEqual('dark');
    const helperBtn = wrapper.find(TouchableOpacity);
    helperBtn.simulate('click');
    wrapper.update();
    helperText = wrapper.find(Text);
    expect(helperText.text()).toEqual('light');
  });
});
