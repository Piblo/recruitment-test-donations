import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CharityDetails = ({ name, logoUrl, description, websiteUrl }) => (
  <div>
    <img src={logoUrl} height="200px" />
    <CharityName>{name}</CharityName>
    <p>{description}</p>
    <a href={websiteUrl} target="_blank" rel="noopener noreferrer">{websiteUrl}</a>
  </div>
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
