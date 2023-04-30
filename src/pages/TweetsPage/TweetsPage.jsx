import { useState, useEffect } from 'react';
import {
  getAllUsers,
  updateUserFollowers,
  loadFromLocalStorage,
  saveToLocalStorage,
  removeFromLocalStorage,
} from 'services';

import { getFilteredUsers, getVisibleUsers } from 'helpers';
import { STORAGE_KEY_FILTER, SHOW_ALL } from 'constants';

import SecondContainer from 'components/SecondContainer';
import RequestError from 'components/RequestError';
import Loader from 'components/Loader';
import LoadMoreButton from 'components/LoadMoreButton';
import Filter from 'components/Filter';
import UserList from 'components/UserList/UserList';
import InfoText from 'components/InfoText';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(
    loadFromLocalStorage(STORAGE_KEY_FILTER) || SHOW_ALL
  );
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [visibleUsersCount, setVisibleUsersCount] = useState(6);

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        const allUsers = await getAllUsers();
        setUsers(allUsers);
        setError(null);
      } catch (error) {
        setError(error.message);
        setUsers([]);
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();
  }, []);

  const handleFollowClickButton = async (userId, isFollowing) => {
    const updatedUsers = users.map(async user => {
      try {
        if (user.id === userId && !isFollowing) {
          const updatedUser = await updateUserFollowers(userId, {
            followers: user.followers + 1,
          });

          saveToLocalStorage(`user_${userId}`, true);
          return updatedUser;
        } else if (user.id === userId && isFollowing) {
          const updatedUser = await updateUserFollowers(userId, {
            followers: user.followers - 1,
          });
          removeFromLocalStorage(`user_${userId}`);
          return updatedUser;
        }

        setError(null);
        return user;
      } catch (error) {
        setError(error.message);
      }
    });

    const updatedUsersResolved = await Promise.all(updatedUsers);
    setUsers(updatedUsersResolved);
  };

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    setVisibleUsersCount(visibleUsersCount + 6);
    setIsLoadingMore(false);
  };

  const filteredUsers = getFilteredUsers(filter, users);
  const visibleUsers = getVisibleUsers(filteredUsers, visibleUsersCount);

  let showLoadMoreButton =
    visibleUsers.length >= 6 && filteredUsers.length - visibleUsers.length > 0;

  return (
    <SecondContainer>
      {isLoading && <Loader isLoading={isLoading} />}

      <Filter filter={filter} setFilter={setFilter} />
      {error && <RequestError />}

      {visibleUsers.length === 0 && !isLoading && !error && (
        <InfoText filter={filter} />
      )}

      {visibleUsers.length > 0 && !isLoading && !error && (
        <UserList
          users={visibleUsers}
          handleFollowClickButton={handleFollowClickButton}
        />
      )}

      {showLoadMoreButton && !error && (
        <LoadMoreButton
          handleLoadMore={handleLoadMore}
          disabled={isLoading}
          isLoadingMore={isLoadingMore}
        />
      )}
    </SecondContainer>
  );
};

export default TweetsPage;
