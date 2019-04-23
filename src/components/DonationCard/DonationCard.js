import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatDate } from '../../utils/formatting';
import Paper from '../Paper/Paper';
import Avatar from '../Avatar/Avatar';
import Container from '../Layout/Container';

const DonationCard = ({ donorName, amount, date, message, avatarUrl }) => (
  <Paper>
    <Container direction="row" alignItems="center">
      <StyledAvatar src={avatarUrl} />
      <Container grow={1}>
        <h3>{donorName}</h3>
        <div>{formatDate(date)}</div>
      </Container>
      <span>{amount}</span>
    </Container>
    <p>{message}</p>
  </Paper>
);

export default DonationCard;

DonationCard.propTypes = {
  donorName: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  message: PropTypes.string,
  avatarUrl: PropTypes.string
};

const StyledAvatar = styled(Avatar)`
  margin-right: 20px;
`;
