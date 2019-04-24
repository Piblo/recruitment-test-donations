import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatDate } from '../../utils/formatting';
import Paper from '../Paper/Paper';
import Avatar from '../Avatar/Avatar';
import Container from '../Layout/Container';
import Item from '../Layout/Item';

const DonationCard = ({ donorName, amount, date, message, avatarUrl }) => (
  <Paper>
    <Container direction="row">
      <StyledAvatar src={avatarUrl} />
      <Item grow={1}>
        <Container direction="row">
          <Item>
            <DonorName>{donorName}</DonorName>
            <div>{formatDate(date)}</div>
          </Item>
          <Amount>{amount}</Amount>
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
  avatarUrl: PropTypes.string
};

const StyledAvatar = styled(Avatar)`
  margin-right: 20px;
`;

const DonorName = styled.h2`
  margin-top: 0;
  font-weight: normal;
`;

const Amount = styled.span`
  align-self: center;
`;
