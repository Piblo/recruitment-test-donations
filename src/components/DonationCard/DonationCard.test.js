import React from 'react';
import { shallow } from 'enzyme';
import DonationCard from './DonationCard';
import Paper from '../Paper/Paper';

describe('<DonationCard>', () => {
  it('Displays donor avatar', () => {
    const avatarUrl = 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif';

    const component = shallow(<DonationCard avatarUrl={avatarUrl} />);

    const avatarElement = component.find('StyledAvatar');
    expect(avatarElement.prop('src')).toEqual(avatarUrl);
  });

  it('Displays donor name', () => {
    const donorName = 'Michae Gibson';
    const component = shallow(<DonationCard donorName={donorName} />);
    expect(component.contains(donorName)).toBeTruthy();
  });

  it('Displays donation amount', () => {
    const amount = 10;
    const component = shallow(<DonationCard amount={amount} />);
    expect(component.contains(amount)).toBeTruthy();
  });

  it('Displays donation date', () => {
    const date = new Date('2019-04-23');
    const component = shallow(<DonationCard date={date} />);
    expect(component.contains('23/04/2019')).toBeTruthy();
  });

  it('Displays donation message', () => {
    const message = 'Every little helps!';
    const component = shallow(<DonationCard message={message} />);
    expect(component.contains(message)).toBeTruthy();
  });

  it('Uses a Paper component', () => {
    const component = shallow(<DonationCard />);
    const paper = component.find(Paper);
    expect(paper.length).toEqual(1);
  });
});
