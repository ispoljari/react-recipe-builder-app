import React from 'react';
import { shallow } from 'enzyme';
import CaptureImg from './CaptureImg';

describe('<CaptureImg />', () => {
  it('Renders without crashing', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    const capturedImg = "dummyString";
    const loadingPredictions = true;
    const loadingRecipes= true;
    const setRef = {};

    shallow(
      <CaptureImg 
        onClick={onClick}
        onChange={onChange}
        capturedImg={capturedImg}
        loadingPredictions={loadingPredictions}
        loadingRecipes={loadingRecipes}
        setRef={setRef}
      />);
  });
});
