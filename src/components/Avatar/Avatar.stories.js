import React from 'react';
import { storiesOf } from '@storybook/react/dist/client/preview';
import Avatar from './Avatar';

storiesOf('Avatar', module)
  .add('default', () => (
    <Avatar src="https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif" />
  ));
