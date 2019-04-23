import React from 'react';
import { shallow } from 'enzyme';
import Paper from './Paper';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('<Paper>', () => {
  it('Renders childen prop', () => {
    const children = <div>Child element</div>;
    const component = shallow(<Paper>{children}</Paper>);
    expect(component.children().getElement()).toEqual(children);
  });

  it('Matches the snapshot', () => {
    const tree = renderer.create(<Paper>children</Paper>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
