import React from 'react';
import { storiesOf } from '@storybook/react/dist/client/preview';
import CharityDetails from './CharityDetails';

storiesOf('CharityDetails', module)
  .add('default', () => (
    <CharityDetails
      name="British Heart Foundation"
      description="Charity description"
      logoUrl="https://images.justgiving.com/image/3a5218cb-2d26-431d-83fd-25fb4f69fd9a.png"
      websiteUrl="http://www.bhf.org.uk"
    />
  ));
