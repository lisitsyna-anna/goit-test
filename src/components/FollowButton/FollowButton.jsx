import { StyledBtn } from './FollowButton.styled';

const FollowButton = ({ text, backgroundColor }) => {
  return <StyledBtn backgroundColor={backgroundColor}>{text}</StyledBtn>;
};

export default FollowButton;
