import React from 'react';
import { shallow } from 'enzyme';

import Author from './Author';

describe('Author />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Author />);
  });
});
