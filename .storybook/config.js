import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Story from './Story';

addDecorator(story => (
  <Story>
    {story()}
  </Story>
));

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
