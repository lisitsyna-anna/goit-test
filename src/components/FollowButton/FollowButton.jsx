import PropTypes from 'prop-types';
import { StyledBtn } from './FollowButton.styled';

const FollowButton = ({ text, backgroundColor, handleFollowButtonClick }) => {
  return (
    <StyledBtn
      type="button"
      backgroundColor={backgroundColor}
      onClick={handleFollowButtonClick}
    >
      {text}
    </StyledBtn>
  );
};

export default FollowButton;

FollowButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleFollowButtonClick: PropTypes.func.isRequired,
};
