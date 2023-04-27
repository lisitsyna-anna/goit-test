import UserCard from 'components/UserCard';
import { CartList } from './UserList.styled';

const UserList = ({ users }) => {
  return (
    <CartList>
      {users.map(({ id, avatar, tweets, followers }) => (
        <UserCard
          id={id}
          key={id}
          tweets={tweets}
          avatar={avatar}
          followers={followers}
        />
      ))}
    </CartList>
  );
};

export default UserList;
