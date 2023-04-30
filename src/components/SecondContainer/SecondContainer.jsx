import PropTypes from 'prop-types';
import { StyledSecondContainer } from './SecondContainer.styled';

const SecondContainer = ({ children }) => {
  return <StyledSecondContainer>{children}</StyledSecondContainer>;
};

export default SecondContainer;

SecondContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
