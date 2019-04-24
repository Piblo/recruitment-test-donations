import React from 'react';
import { storiesOf } from '@storybook/react/dist/client/preview';
import DonationCard from './DonationCard';

storiesOf('DonationCard', module)
  .add('default', () => (
    <DonationCard
      donorName="Michael Gibson"
      avatarUrl="https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif"
      amount="10"
      message="Every little counts!"
      date={new Date()}
      currencyCode="GBP"
    />
  ));
