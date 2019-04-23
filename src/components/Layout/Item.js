import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.div`
  flex: ${props => props.grow};
`;

export default Item;

Item.propTypes = {
  grow: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Item.defaultProps = {
  grow: 1
};
