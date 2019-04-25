import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingIndicator from './LoadingIndicator';

storiesOf('LoadingIndicator', module)
  .add('default', () => (
    <LoadingIndicator />
  ));
