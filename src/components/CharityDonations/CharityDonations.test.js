import React from 'react';
import { shallow } from 'enzyme';
import { CharityDonations, CharityDetails, DonationCard, LoadingIndicator } from '..';
import DonationsTimeline from '../DonationsTimeline/DonationsTimeline';

describe('CharityDonations', () => {
  it('Displays the charity details', () => {
    const component = shallow(<CharityDonations charity={charity} />);

    const charityDetails = component.find(CharityDetails);
    expect(charityDetails.length).toEqual(1);
    expect(charityDetails.prop('name')).toBe(charity.name);
    expect(charityDetails.prop('description')).toBe(charity.description);
    expect(charityDetails.prop('logoUrl')).toBe(charity.logoAbsoluteUrl);
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

  it('Displays donations timeline', () => {
    const component = shallow(<CharityDonations charity={charity} donations={donations} />);
    const timeline = component.find(DonationsTimeline);

    const expectedDonations = donations.map(x => ({
      amount: x.amount,
      currencyCode: x.currencyCode,
      date: x.donationDate,
      donorName: x.donorDisplayName,
      avatarUrl: x.imageUrl,
      message: x.message
    }));

    expect(timeline.prop('donations')).toEqual(expectedDonations);
  });

  it('Displays loading indicator while data is being fetched', () => {
    const component = shallow(<CharityDonations loading={true} />);
    const loadingIndicator = component.find(LoadingIndicator);
    expect(loadingIndicator.length).toBeTruthy();
  });

  it('Doesn\'t display a loading indicator while data is not being fetched', () => {
    const component = shallow(<CharityDonations loading={false} />);
    const loadingIndicator = component.find(LoadingIndicator);
    expect(loadingIndicator.length).toBeFalsy();
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
