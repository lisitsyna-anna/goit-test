import PropTypes from 'prop-types';
import { loadFromLocalStorage } from 'services/localStorage';
import logo from '../../images/logo-2x.png';
import defaultUserAvatar from '../../images/avatar-2x.png';
import FollowButton from 'components/FollowButton';

import {
  Card,
  UpperWrapper,
  UserInfoWrapper,
  AvatarWrapper,
  StyledAvatar,
  TextWrapper,
} from './UserCard.styled';

const UserCard = ({
  id,
  avatar,
  tweets,
  followers,
  handleFollowClickButton,
}) => {
  const isFollowing = loadFromLocalStorage(`user_${id}`) === true;

  const onFollowButton = () => {
    handleFollowClickButton(id, isFollowing);
  };

  const buttonText = isFollowing ? 'Following' : 'Follow';
  const buttonBgColor = isFollowing ? '#5CD3A8' : '#EBD8FF';

  return (
    <Card key={id}>
      <UpperWrapper>
        <a href="https://goit.global/ua/">
          <img src={logo} alt="logo" width="76" height="22" />
        </a>
        <AvatarWrapper>
          <StyledAvatar
            src={avatar || defaultUserAvatar}
            alt="User avatar"
            width="62"
            height="62"
          />
        </AvatarWrapper>
      </UpperWrapper>
      <UserInfoWrapper>
        <TextWrapper>
          <p>{tweets || 100} tweets</p>
          <p>
            {followers.toLocaleString('en-US') ||
              Number('100500').toLocaleString('en-US')}{' '}
            followers
          </p>
        </TextWrapper>

        <FollowButton
          text={buttonText}
          backgroundColor={buttonBgColor}
          handleFollowButtonClick={onFollowButton}
        />
      </UserInfoWrapper>
    </Card>
  );
};

export default UserCard;

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  handleFollowClickButton: PropTypes.func.isRequired,
};
