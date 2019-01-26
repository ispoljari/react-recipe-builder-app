import React from 'react';
import { shallow } from 'enzyme';
import CaptureImg from './CaptureImg';

describe('<CaptureImg />', () => {
  it('Renders without crashing', () => {
    shallow(<CaptureImg />);
  });
});
