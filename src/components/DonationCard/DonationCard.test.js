import React from 'react';
import { shallow } from 'enzyme';
import DonationCard from './DonationCard';

describe('DonationCard', () => {
  it('Displays donor name', () => {
    const donorName = 'Michae Gibson';
    const component = shallow(<DonationCard donorName={donorName} />);
    expect(component.contains(donorName)).toBeTruthy();
  });
});
