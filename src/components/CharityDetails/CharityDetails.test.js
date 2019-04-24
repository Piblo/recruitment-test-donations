import React from 'react';
import { shallow } from 'enzyme';
import CharityDetails from './CharityDetails';

describe('<CharityDetails>', () => {
  it('Displays the charity name', () => {
    const charityName = 'British Heart Fundation';
    const component = shallow(<CharityDetails name={charityName} />);
    expect(component.contains(charityName)).toBeTruthy();
  });

  it('Displays the charity logo', () => {
    const logoUrl = 'https://images.justgiving.com/image/3a5218cb-2d26-431d-83fd-25fb4f69fd9a.png';

    const component = shallow(<CharityDetails logoUrl={logoUrl} />);

    const logoElement = component.find('img');
    expect(logoElement.prop('src')).toEqual(logoUrl);
  });

  it('Displays the charity description', () => {
    const description = 'Charity description';
    const component = shallow(<CharityDetails description={description} />);
    expect(component.contains(description)).toBeTruthy();
  });

  it('Displays the charity website URL', () => {
    const websiteUrl = 'http://www.bhf.org.uk';
    const component = shallow(<CharityDetails websiteUrl={websiteUrl} />);

    const linkElement = component.find('a');
    expect(linkElement.prop('href')).toEqual(websiteUrl);
    expect(linkElement.text()).toEqual(websiteUrl);
    expect(linkElement.prop('target')).toEqual('_blank');
  });
});
