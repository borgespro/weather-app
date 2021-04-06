import React from 'react';

import { CustomText } from './Temperature.styled';

export type TemperatureProps = {
  degree: number;
};

export default function Temperature({ degree = 0 }: TemperatureProps): React.ReactElement {
  return <CustomText>{` ${degree.toFixed()}º`}</CustomText>;
}
