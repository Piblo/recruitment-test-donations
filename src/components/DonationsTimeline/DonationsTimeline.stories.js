import React from 'react';
import { storiesOf } from '@storybook/react';
import DonationsTimeline from './DonationsTimeline';

storiesOf('DonationsTimeline', module)
  .add('default', () => (
    <DonationsTimeline donations={donations} />
  ));

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
