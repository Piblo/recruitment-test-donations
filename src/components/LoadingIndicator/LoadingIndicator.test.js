import React from 'react';
import renderer from 'react-test-renderer';
import LoadingIndicator from './LoadingIndicator';
import 'jest-styled-components';

describe('<LoadingIndicator>', () => {
  it('Matches snapshot', () => {
    const tree = renderer.create(<LoadingIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
