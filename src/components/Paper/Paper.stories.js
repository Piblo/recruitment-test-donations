import React from 'react';
import { storiesOf } from '@storybook/react';
import Paper from './Paper';

storiesOf('Paper', module)
  .add('with children', () => (
    <Paper>
      <h2>This is a paper component</h2>
      <p>It renders anything you pass to it as children and applies styles consistently</p>
    </Paper>
  ));
