import { useState, useEffect } from 'react';
import { getUsers } from 'services/userAPI';

import MainContainer from 'components/MainContainer';
import UserList from 'components/UserList';
import RequestError from 'components/RequestError';
import Loader from 'components/Loader';
import LoadMoreButton from 'components/LoadMoreButton';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getUsersData() {
      setIsLoading(true);
      try {
        const newUsers = await getUsers(page);
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
        setError(null);
      } catch (error) {
        setError(error.messsage);
      } finally {
        setIsLoading(false);
      }
    }
    getUsersData();
  }, [page]);

  const handleLoadMore = () => {
    console.log('Нажали на Load More');
  };

  return (
    <MainContainer>
      {isLoading && <Loader isLoading={isLoading} />}
      {error && <RequestError />}
      {users.length > 0 && !isLoading && <UserList users={users} />}

      <LoadMoreButton handleLoadMore={handleLoadMore} />
    </MainContainer>
  );
};

export default TweetsPage;
