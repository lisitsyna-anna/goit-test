import { StyledBtn } from './FollowButton.styled';

const FollowButton = ({ text, backgroundColor, handleFollowButtonClick }) => {
  return (
    <StyledBtn
      backgroundColor={backgroundColor}
      onClick={handleFollowButtonClick}
    >
      {text}
    </StyledBtn>
  );
};

export default FollowButton;
