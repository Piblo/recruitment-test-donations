import React from 'react';
import { shallow } from 'enzyme';
import Donation from './Donation';
import { Avatar } from '..';
import { renderWithTheme } from '../../utils/testing';

describe('<Donation>', () => {
  it('Displays donor avatar', () => {
    const avatarUrl = 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif';

    const component = shallow(<Donation avatarUrl={avatarUrl} />);

    const avatarElement = component.find(Avatar);
    expect(avatarElement.prop('src')).toEqual(avatarUrl);
  });

  it('Displays donor name', () => {
    const donorName = 'Michae Gibson';
    const component = shallow(<Donation donorName={donorName} />);
    expect(component.contains(donorName)).toBeTruthy();
  });

  it('Displays donation amount', () => {
    const amount = 10;
    const currencyCode = 'GBP';
    const component = shallow(<Donation amount={amount} currencyCode={currencyCode} />);
    expect(component.contains(`£${amount}`)).toBeTruthy();
  });

  it('Displays donation date', () => {
    const date = new Date('2019-04-23');
    const component = shallow(<Donation date={date} />);
    expect(component.contains('23/04/2019')).toBeTruthy();
  });

  it('Displays message when the component is hovered', () => {
    const message = 'Every little counts!';
    const component = shallow(<Donation message={message} />);
    component.simulate('mouseOver');
    expect(component.contains(message)).toBeTruthy();
  });

  it('Doesn\'t display message when the component is not hovered', () => {
    const message = 'Every little counts!';
    const component = shallow(<Donation message={message} />);
    expect(component.contains(message)).toBeFalsy();
  });

  it('Hides the message on mouse leave', () => {
    const message = 'Every little counts!';
    const component = shallow(<Donation message={message} />);
    component.simulate('mouseOver');
    component.simulate('mouseLeave');
    expect(component.contains(message)).toBeFalsy();
  });

  it('Matches snapshot', () => {
    const tree = renderWithTheme(
      <Donation
        avatarUrl="https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif"
        donorName="Michael Gibson"
        currencyCode="GBP"
        date={new Date('2019-04-23')}
        amount={10}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
