import React from 'react';
import renderer from 'react-test-renderer';
import LoadingIndicator from './LoadingIndicator';

describe('<LoadingIndicator>', () => {
  it('Matches snapshot', () => {
    const tree = renderer.create(<LoadingIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
