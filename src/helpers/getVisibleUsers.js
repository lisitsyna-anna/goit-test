import { loadFromLocalStorage } from 'services';
import { SHOW_ALL, FOLLOWING } from 'constants';

export const getVisibleUsers = (filter, users) => {
  if (filter === SHOW_ALL) {
    return users;
  } else if (filter === FOLLOWING) {
    return users.filter(
      ({ id }) => loadFromLocalStorage(`user_${id}`) === true
    );
  } else {
    return users.filter(({ id }) => {
      return loadFromLocalStorage(`user_${id}`) !== true;
    });
  }
};
