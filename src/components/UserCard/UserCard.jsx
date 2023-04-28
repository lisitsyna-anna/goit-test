import { useState } from 'react';
import { updateUserFollowers } from 'services/userAPI';
import {
  saveToLocalStorage,
  removeFromLocalStorage,
  loadFromLocalStorage,
} from 'services/localStorage';

import logo from '../../images/logo-2x.png';
import cartBgImg from '../../images/cardBg-2x.png';
import defaultUserAvatar from '../../images/avatar-2x.png';
import FollowButton from 'components/FollowButton';

import {
  Card,
  UpperWrapper,
  UserInfoWrapper,
  AvatarWrapper,
  StyledImage,
  StyledAvatar,
  TextWrapper,
} from './UserCard.styled';

const UserCard = ({ id, avatar, tweets, followers }) => {
  const [following, setFollowing] = useState(
    loadFromLocalStorage(`user_${id}`) || false
  );
  const [followersCount, setFollowersCount] = useState(followers);

  const handleFollowButtonClick = async () => {
    if (!following) {
      const updatedUser = await updateUserFollowers(id, {
        followers: followersCount + 1,
      });

      saveToLocalStorage(`user_${id}`, true);
      setFollowersCount(updatedUser.followers);
      setFollowing(true);
    } else {
      const updatedUser = await updateUserFollowers(id, {
        followers: followersCount - 1,
      });

      removeFromLocalStorage(`user_${id}`);
      setFollowersCount(updatedUser.followers);
      setFollowing(false);
    }
  };

  const buttonText = following ? 'Following' : 'Follow';
  const buttonBgColor = following ? '#5CD3A8' : '#EBD8FF';

  return (
    <Card key={id}>
      <UpperWrapper>
        <a href="https://goit.global/ua/">
          <img src={logo} alt="logo" width="76" height="22" />
        </a>
        <StyledImage src={cartBgImg} alt="Question mark" />
      </UpperWrapper>
      <UserInfoWrapper>
        <AvatarWrapper>
          <StyledAvatar
            src={avatar || defaultUserAvatar}
            alt="User avatar"
            width="62"
            height="62"
          />
        </AvatarWrapper>

        <TextWrapper>
          <p>{tweets} tweets</p>
          <p>{followersCount} followers</p>
        </TextWrapper>

        <FollowButton
          text={buttonText}
          backgroundColor={buttonBgColor}
          handleFollowButtonClick={handleFollowButtonClick}
        />
      </UserInfoWrapper>
    </Card>
  );
};

export default UserCard;
