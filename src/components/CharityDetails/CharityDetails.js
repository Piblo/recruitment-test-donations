import React from 'react';
import PropTypes from 'prop-types';

const CharityDetails = ({ name, logoUrl, description, websiteUrl }) => (
  <div>
    <img src={logoUrl} height="200px" />
    <h2>{name}</h2>
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

