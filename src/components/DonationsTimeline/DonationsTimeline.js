import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Donation } from '..';

const DonationsTimeline = ({ donations }) => (
  <React.Fragment>
    <Container direction="row" alignItems="center">
      {donations.sort((a, b) => a.donationDate - b.donationDate).map((donation, index) =>
        <Donation
          key={index}
          amount={donation.amount}
          donorName={donation.donorName}
          avatarUrl={donation.avatarUrl}
          currencyCode={donation.currencyCode}
          date={donation.date}
          message={donation.message}
        />
      )}
    </Container>
    <Timeline />
  </React.Fragment>
);

export default DonationsTimeline;

DonationsTimeline.propTypes = {
  donations: PropTypes.array
};

const Timeline = styled.div`
  background-color: ${props => props.theme.palette.primary};
  height: 3px;
  transform: translateY(-50%);
`;
