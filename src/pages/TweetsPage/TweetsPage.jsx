import { useState, useEffect } from 'react';
import {
  getUsersWithPagination,
  getTotalUsers,
  loadFromLocalStorage,
  saveToLocalStorage,
} from 'services';

import { getVisibleUsers } from 'helpers';
import { STORAGE_KEY_FILTER } from 'constants';

import UserList from 'components/UserList';
import RequestError from 'components/RequestError';
import Loader from 'components/Loader';
import LoadMoreButton from 'components/LoadMoreButton';
import Filter from 'components/Filter';

import { ContainerTweetsPage } from './TweetsPage.styled';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(null);
  const [filter, setFilter] = useState(
    loadFromLocalStorage(STORAGE_KEY_FILTER) || 'showAll'
  );
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getUsersData() {
      try {
        setIsLoading(true);
        const newUsers = await getUsersWithPagination(page);
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
        setError(null);
      } catch (error) {
        setError(error.messsage);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    }
    getUsersData();

    async function getTotalUsersAmount() {
      try {
        setIsLoading(true);
        const total = await getTotalUsers();
        setTotalUsers(total);
        setError(null);
      } catch (error) {
        setError(error.messsage);
      } finally {
        setIsLoading(false);
      }
    }

    getTotalUsersAmount();
  }, [page]);

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    setPage(prevPage => prevPage + 1);
  };

  const handleFilterChange = e => {
    saveToLocalStorage(STORAGE_KEY_FILTER, e.target.value);
    setFilter(e.target.value);
  };

  const visibleUsers = getVisibleUsers(filter, users);

  const showLoadMoreButton =
    getVisibleUsers.length > 0 && totalUsers - page * 6 > 0;

  return (
    <ContainerTweetsPage>
      {isLoading && <Loader isLoading={isLoading} />}
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {error && <RequestError />}

      {users.length > 0 && !isLoading && <UserList users={visibleUsers} />}

      {showLoadMoreButton && (
        <LoadMoreButton
          handleLoadMore={handleLoadMore}
          disabled={isLoading}
          isLoadingMore={isLoadingMore}
        />
      )}
    </ContainerTweetsPage>
  );
};

export default TweetsPage;
