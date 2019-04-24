import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CharityDetails, DonationCard } from '..';

const CharityDonations = ({ charity, donations, getCharity, getDonations }) => {
  useEffect(() => {
    const charityId = 183092;
    getCharity(charityId);
    getDonations(charityId);
  }, []);

  return (
    <PageContainer>
      {charity && <CharityDetails name={charity.name} description={charity.description} logoUrl={charity.logoAbsoluteUrl} websiteUrl={charity.websiteUrl} />}
      <h3>Latest donations</h3>
      {!donations.length && <p>No donations have been made yet.</p>}
      <CardsContainer>
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
      </CardsContainer>
    </PageContainer>
  );
};

export default CharityDonations;

CharityDonations.propTypes = {
  charity: PropTypes.object,
  donations: PropTypes.array,
  getCharity: PropTypes.func,
  getDonations: PropTypes.func
};

CharityDonations.defaultProps = {
  donations: []
};

const PageContainer = styled.div`
  margin: auto;
  max-width: 880px;
  padding-top: 60px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;
