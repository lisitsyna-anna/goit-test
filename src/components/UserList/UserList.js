import PropTypes from 'prop-types';
import UserCard from 'components/UserCard/UserCard';
import { CartList } from './UserList.styled';

const UserList = ({ users, handleFollowClickButton }) => {
  return (
    <CartList>
      {users.map(({ id, avatar, tweets, followers }, index) => (
        <UserCard
          id={id}
          key={`${id}-${index}`}
          tweets={tweets}
          avatar={avatar}
          followers={followers}
          handleFollowClickButton={handleFollowClickButton}
        />
      ))}
    </CartList>
  );
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
  handleFollowClickButton: PropTypes.func.isRequired,
};
