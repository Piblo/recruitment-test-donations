import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '..';

const CharityDetails = ({ name, logoUrl, description, websiteUrl }) => (
  <Container alignItems="center">
    <ImageContainer>
      <img src={logoUrl} height="100%" width="100%" />
    </ImageContainer>
    <CharityName>{name}</CharityName>
    <p>{description}</p>
    <a href={websiteUrl} target="_blank" rel="noopener noreferrer">{websiteUrl}</a>
  </Container>
);

export default CharityDetails;

CharityDetails.propTypes = {
  name: PropTypes.string,
  logoUrl: PropTypes.string,
  description: PropTypes.string,
  websiteUrl: PropTypes.string
};

const CharityName = styled.h1`
  text-transform: uppercase;
  font-weight: normal;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  background-color: ${props => props.theme.palette.secondary};
  height: 200px;
  width: 200px;
  padding: 20px;
  box-sizing: border-box;
`;
