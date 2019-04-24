import React from 'react';
import { shallow } from 'enzyme';
import { CharityDonations, CharityDetails, DonationCard } from '..';

describe('CharityDonations', () => {
  it('Displays the charity details', () => {
    const component = shallow(<CharityDonations charity={charity} />);

    const charityDetails = component.find(CharityDetails);
    expect(charityDetails.length).toEqual(1);
    expect(charityDetails.prop('name')).toBe(charity.name);
    expect(charityDetails.prop('description')).toBe(charity.description);
    expect(charityDetails.prop('logoUrl')).toBe(charity.logoUrl);
    expect(charityDetails.prop('websiteUrl')).toBe(charity.websiteUrl);
  });

  it('Displays a latest donations label', () => {
    const component = shallow(<CharityDonations charity={charity} />);
    expect(component.contains('Latest donations')).toBeTruthy();
  });

  it('Displays a message if no donations have been made', () => {
    const component = shallow(<CharityDonations charity={charity} />);
    expect(component.contains('No donations have been made yet.')).toBeTruthy();
  });

  it('Displays donations list', () => {
    const component = shallow(<CharityDonations charity={charity} donations={donations} />);

    donations.forEach((donation, index) => {
      const card = component.find(DonationCard).at(index);
      expect(card.prop('donorName')).toBe(donation.donorDisplayName);
      expect(card.prop('amount')).toBe(donation.amount);
      expect(card.prop('avatarUrl')).toBe(donation.imageUrl);
      expect(card.prop('currencyCode')).toBe(donation.currencyCode);
      expect(card.prop('date')).toBe(donation.donationDate);
      expect(card.prop('message')).toBe(donation.message);
    });
  });
});

const charity = {
  name: 'British Heart Foundation',
  description: 'Charity description',
  websiteUrl: 'http://www.bhf.org.uk',
  logoUrl: 'https://images.justgiving.com/image/3a5218cb-2d26-431d-83fd-25fb4f69fd9a.png'
};

const donations = [{
  amount: 3,
  currencyCode: 'GBP',
  donationDate: '/Date(1554076800000+0000)/',
  donorDisplayName: 'Anthony (Tony) Rudd',
  imageUrl: 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif',
  message: 'Have just had an ICD fitted, here is a small amount to help things, tis all I can afford.'
},
{
  amount: 10.5,
  currencyCode: 'GBP',
  donationDate: '/Date(1552608000000+0000)/',
  donorDisplayName: 'Michael Gibson',
  imageUrl: 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif',
  message: 'Every little helps!!!'
},
{
  amount: 3,
  currencyCode: 'GBP',
  donationDate: '/Date(1551398400000+0000)/',
  donorDisplayName: 'Anthony (Tony) Rudd',
  imageUrl: 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif',
  message: 'Have just had an ICD fitted, here is a small amount to help things, tis all I can afford.'
}];
