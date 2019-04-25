import React from 'react';
import { storiesOf } from '@storybook/react';
import Donation from './Donation';

storiesOf('Donation', module)
  .add('default', () => (
    <Donation
      avatarUrl="https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif"
      donorName="Michael Gibson"
      currencyCode="GBP"
      date={new Date('2019-04-23')}
      amount={10}
      message="Every little counts!"
    />
  ));
