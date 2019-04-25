import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CharityDetails, DonationsTimeline, LoadingIndicator } from '..';

const CharityDonations = ({ charity, donations, getCharity, getDonations, loading }) => {
  useEffect(() => {
    const charityId = 183092;
    getCharity(charityId);
    getDonations(charityId);
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <PageContainer>
      {charity && <CharityDetails name={charity.name} description={charity.description} logoUrl={charity.logoAbsoluteUrl} websiteUrl={charity.websiteUrl} />}
      <h3>Latest donations</h3>
      {!donations.length && <p>No donations have been made yet.</p>}
      {donations.length > 0 && <DonationsTimeline donations={mapDonations(donations)} />}
    </PageContainer>
  );
};

export default CharityDonations;

CharityDonations.propTypes = {
  charity: PropTypes.object,
  donations: PropTypes.array,
  getCharity: PropTypes.func,
  getDonations: PropTypes.func,
  loading: PropTypes.bool
};

CharityDonations.defaultProps = {
  donations: []
};

const PageContainer = styled.div`
  margin: auto;
  max-width: 880px;
  padding-top: 60px;
`;

function mapDonations(donations) {
  return donations.map(x => ({
    amount: x.amount,
    currencyCode: x.currencyCode,
    date: x.donationDate,
    donorName: x.donorDisplayName,
    avatarUrl: x.imageUrl,
    message: x.message
  }));
}
