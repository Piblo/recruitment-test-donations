import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  flex: ${props => props.grow};
  justify-content: ${props => props.justifyContent};
  flex-basis: ${props => props.direction === 'column' ? 'auto' : 'unset'};
  position: relative;
`;

export default Container;

Container.propTypes = {
  direction: PropTypes.string,
  alignItems: PropTypes.string,
  grow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyContent: PropTypes.string,
};

Container.defaultProps = {
  direction: 'column',
  alignItems: 'unset',
  grow: 'unset',
  justifyContent: 'unset'
};
