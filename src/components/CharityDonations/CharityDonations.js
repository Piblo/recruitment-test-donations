import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CharityDetails, DonationCard } from '..';

const CharityDonations = ({ charity, donations, getCharity }) => {
  useEffect(() => {
    const charityId = 183092;
    getCharity(charityId);
  }, []);

  return (
    <div>
      {charity && <CharityDetails name={charity.name} description={charity.description} logoUrl={charity.logoAbsoluteUrl} websiteUrl={charity.websiteUrl} />}
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
};

export default CharityDonations;

CharityDonations.propTypes = {
  charity: PropTypes.object,
  donations: PropTypes.array,
  getCharity: PropTypes.func
};

CharityDonations.defaultProps = {
  donations: []
};
