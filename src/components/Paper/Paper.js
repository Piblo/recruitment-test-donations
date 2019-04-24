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
  background-color: #4C4F60;
  padding: 16px 25px;
  position: relative;
  border-radius: 4px;
`;
