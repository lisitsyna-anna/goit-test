import PropTypes from 'prop-types';
import { Container } from './MainContainer.styled';

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
