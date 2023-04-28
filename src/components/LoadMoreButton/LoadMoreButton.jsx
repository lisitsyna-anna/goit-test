import { StyledBtn } from './LoadMoreButton.styled';

const LoadMoreButton = ({ handleLoadMore, disabled, isLoadingMore }) => {
  return (
    <StyledBtn onClick={handleLoadMore} disabled={disabled}>
      {isLoadingMore ? 'Loading...' : 'Load more'}
    </StyledBtn>
  );
};

export default LoadMoreButton;
