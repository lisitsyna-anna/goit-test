import { SHOW_ALL, FOLLOW, FOLLOWING } from 'constants';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <select name="filterUsers" value={filter} onChange={handleFilterChange}>
      <option value={SHOW_ALL}>Show all</option>
      <option value={FOLLOW}>Follow</option>
      <option value={FOLLOWING}>Following</option>
    </select>
  );
};

export default Filter;
