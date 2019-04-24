import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatDate, getCurrencySymbol } from '../../utils/formatting';
import { Paper, Avatar, Container, Item } from '..';

const DonationCard = ({ donorName, amount, date, message, avatarUrl, currencyCode }) => (
  <Paper>
    <Container direction="row">
      <StyledAvatar src={avatarUrl} />
      <Item grow={1}>
        <Container direction="row">
          <Item>
            <DonorName>{donorName}</DonorName>
            <div>{formatDate(date)}</div>
          </Item>
          <Amount>{getCurrencySymbol(currencyCode) + amount}</Amount>
        </Container>
        <p>{message}</p>
      </Item>
    </Container>
  </Paper>
);

export default DonationCard;

DonationCard.propTypes = {
  donorName: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  message: PropTypes.string,
  avatarUrl: PropTypes.string,
  currencyCode: PropTypes.string
};

const StyledAvatar = styled(Avatar)`
  margin-right: 20px;
`;

const DonorName = styled.h2`
  margin-top: 0;
  font-weight: normal;
  margin-bottom: 8px;
`;

const Amount = styled.span`
  align-self: center;
  color: ${props => props.theme.palette.primary};
  font-size: 2em;
`;
