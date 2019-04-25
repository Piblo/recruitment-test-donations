import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Avatar } from '..';
import { getCurrencySymbol, formatDate } from '../../utils/formatting';

const Donation = ({ donorName, amount, date, avatarUrl, currencyCode }) => (
  <Container alignItems="center" grow={1}>
    <Avatar src={avatarUrl} />
    <DonorName>{donorName}</DonorName>
    <Amount>{getCurrencySymbol(currencyCode) + amount}</Amount>
    <VerticalLine />
    <EventCircle />
    <DonationDate>{formatDate(date)}</DonationDate>
  </Container>
);

export default Donation;

Donation.propTypes = {
  donorName: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  avatarUrl: PropTypes.string,
  currencyCode: PropTypes.string,
};

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
