import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
  it('Renders without crashing', () => {
    shallow(<Form />);
  });
});