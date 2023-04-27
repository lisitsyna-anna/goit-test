import logo from '../../images/logo-2x.png';
import cartBgImg from '../../images/cardBg-2x.png';
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
          <StyledAvatar src={avatar} alt="User avatar" width="62" height="62" />
        </AvatarWrapper>

        <TextWrapper>
          <p>{tweets} tweets</p>
          <p>{followers} followers</p>
        </TextWrapper>

        <FollowButton text="Follow" backgroundColor="#EBD8FF" />
      </UserInfoWrapper>
    </Card>
  );
};

export default UserCard;
