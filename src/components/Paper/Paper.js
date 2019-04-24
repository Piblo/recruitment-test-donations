import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paper = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default Paper;

Paper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};


const Container = styled.div`
  background-color: #ffffff;
  padding: 16px 25px;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(194, 194, 194, 0.5);
`;
