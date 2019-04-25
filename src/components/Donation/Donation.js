import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Avatar, Paper } from '..';
import { getCurrencySymbol, formatDate } from '../../utils/formatting';

const Donation = ({ donorName, amount, date, avatarUrl, currencyCode, message }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <StyledContainer alignItems="center" grow={1} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <Avatar src={avatarUrl} />
      <DonorName>{donorName}</DonorName>
      <Amount>{getCurrencySymbol(currencyCode) + amount}</Amount>
      <VerticalLine />
      <EventCircle />
      <DonationDate>{formatDate(date)}</DonationDate>
      {hovered && <Message>{message}</Message>}
    </StyledContainer>
  );
};

export default Donation;

Donation.propTypes = {
  donorName: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  avatarUrl: PropTypes.string,
  currencyCode: PropTypes.string,
  message: PropTypes.string
};

const StyledContainer = styled(Container)`
  position: relative;
`;

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
  border-left: 1px dashed ${props => props.theme.palette.secondary};
  height: 40px;
`;

const EventCircle = styled.div`
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background-color: ${props => props.theme.palette.primary};
  transform: translateY(50%);
`;

const Message = styled(Paper)`
  position: absolute;
  left: 20px;
  transform: translateX(50%);
  width: 100%;
  z-index: 1;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right:10px solid #4C4F60;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
