import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('<Results />', () => {
  it('Renders without crashing', () => {
    shallow(<Results results={[]} />);
  });
});
