import PropTypes from 'prop-types';
import { StyledBtn } from './LoadMoreButton.styled';

const LoadMoreButton = ({ handleLoadMore, disabled, isLoadingMore }) => {
  return (
    <StyledBtn type="button" onClick={handleLoadMore} disabled={disabled}>
      {isLoadingMore ? 'Loading...' : 'Load more'}
    </StyledBtn>
  );
};

export default LoadMoreButton;

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  isLoadingMore: PropTypes.bool.isRequired,
};
