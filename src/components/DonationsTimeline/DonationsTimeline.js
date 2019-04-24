import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Avatar, Container } from '..';
import { formatDate, getCurrencySymbol } from '../../utils/formatting';

const DonationsTimeline = ({ donations }) => (
  <React.Fragment>
    <Container direction="row" alignItems="center">
      {donations.map((donation, index) =>
        <Container key={index} alignItems="center" grow={1}>
          <Avatar src={donation.imageUrl} />
          <DonorName>{donation.donorDisplayName}</DonorName>
          {/* <MessageContainer><Message>{donation.message}</Message></MessageContainer> */}
          <Amount>{getCurrencySymbol(donation.currencyCode) + donation.amount}</Amount>
          <VerticalLine />
          <EventCircle />
          <DonationDate>{formatDate(donation.donationDate)}</DonationDate>
        </Container>
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

// const DonationContainer = styled(Container)`
//   max-width: 25%;
// `;

const DonorName = styled.p`
  margin-bottom: 6px;
`;

const Amount = styled.span`
  color: ${props => props.theme.palette.primary};
  font-size: 1.3em;
  margin-bottom: 6px;
`;

const DonationDate = styled.div`
  color: ${props => props.theme.palette.textLight};
  position: absolute;
  bottom: -32px;
  font-size: 0.8em;
`;

const VerticalLine = styled.div`
  border-left: 1px dashed #ECF0F1;
  height: 40px;
`;

const EventCircle = styled.div`
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background-color: ${props => props.theme.palette.primary};
  transform: translateY(50%);
`;

const MessageContainer = styled.div`
  width: 100%;
`;

const Message = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${props => props.theme.palette.textLight};
  font-size: 0.8em;
`;
