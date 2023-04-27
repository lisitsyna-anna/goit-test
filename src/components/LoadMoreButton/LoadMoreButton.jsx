import { StyledBtn } from './LoadMoreButton.styled';

const LoadMoreButton = ({ handleLoadMore }) => {
  return <StyledBtn onClick={handleLoadMore}>Load More</StyledBtn>;
};

export default LoadMoreButton;
