import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Avatar from './Avatar';

describe('<Avatar>', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Avatar src={'url'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
