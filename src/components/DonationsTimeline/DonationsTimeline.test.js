import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import DonationsTimeline from './DonationsTimeline';
import { Donation } from '..';
import { renderWithTheme } from '../../utils/testing';

describe('<DonationsTimeline>', () => {
  it('Displays donation events', () => {
    const component = shallow(<DonationsTimeline donations={donations} />);
    const sortedDonations = donations.sort((a, b) => a.date - b.date);

    sortedDonations.forEach((donation, index) => {
      const donationComponent = component.find(Donation).at(index);
      expect(donationComponent.prop('date')).toEqual(donation.date);
      expect(donationComponent.prop('amount')).toEqual(donation.amount);
      expect(donationComponent.prop('avatarUrl')).toEqual(donation.avatarUrl);
      expect(donationComponent.prop('currencyCode')).toEqual(donation.currencyCode);
      expect(donationComponent.prop('donorName')).toEqual(donation.donorName);
    });
  });

  it('Matches snapshot', () => {
    const tree = renderWithTheme(<DonationsTimeline donations={donations} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const donations = [{
  amount: 3,
  currencyCode: 'GBP',
  date: new Date('2019-01-03'),
  donorName: 'Anthony (Tony) Rudd',
  avatarUrl: 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif',
  message: 'Have just had an ICD fitted, here is a small amount to help things, tis all I can afford.'
},
{
  amount: 10.5,
  currencyCode: 'GBP',
  date: new Date('2019-01-01'),
  donorName: 'Michael Gibson',
  avatarUrl: 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif',
  message: 'Every little helps!!!'
},
{
  amount: 3,
  currencyCode: 'GBP',
  date: new Date('2019-01-02'),
  donorName: 'Anthony (Tony) Rudd',
  avatarUrl: 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif',
  message: 'Have just had an ICD fitted, here is a small amount to help things, tis all I can afford.'
}];
