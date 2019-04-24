import React from 'react';
import PropTypes from 'prop-types';
import { CharityDetails, DonationCard } from '..';

const CharityDonations = ({ charity, donations }) => (
  <div>
    <CharityDetails name={charity.name} description={charity.description} logoUrl={charity.logoUrl} websiteUrl={charity.websiteUrl} />
    <h3>Latest donations</h3>
    {!donations.length && <p>No donations have been made yet.</p>}
    {donations.map((donation, index) =>
      <DonationCard
        key={index}
        donorName={donation.donorDisplayName}
        amount={donation.amount}
        avatarUrl={donation.imageUrl}
        currencyCode={donation.currencyCode}
        date={donation.donationDate}
        message={donation.message}
      />
    )}
  </div>
);

export default CharityDonations;

CharityDonations.propTypes = {
  charity: PropTypes.object,
  donations: PropTypes.array
};

CharityDonations.defaultProps = {
  donations: []
};
