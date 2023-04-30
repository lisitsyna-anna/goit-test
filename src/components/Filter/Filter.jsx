import { useState } from 'react';
import PropTypes from 'prop-types';
import { saveToLocalStorage } from 'services';
import { selectValues, STORAGE_KEY_FILTER } from 'constants';

import {
  SelectWrapper,
  StyledInput,
  StyledDropdown,
  StyledArrow,
  SelectList,
  SelectItem,
} from './Filter.styled';

const Filter = ({ filter, setFilter }) => {
  const [inputValue, setInputValue] = useState(filter);
  const [isVisibleDropDown, setIsVisibleDropDown] = useState(false);

  const handleInputClick = () => {
    setIsVisibleDropDown(prevState => !isVisibleDropDown);
  };

  const handleDropDownClick = value => {
    setIsVisibleDropDown(prevState => !isVisibleDropDown);
    setFilter(value);
    setInputValue(value);
    saveToLocalStorage(STORAGE_KEY_FILTER, value);
  };

  return (
    <SelectWrapper>
      <StyledInput
        type="text"
        name="filterUsers"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onClick={handleInputClick}
      />
      <StyledDropdown isVisibleDropDown={isVisibleDropDown}>
        <SelectList>
          {selectValues.map((value, index) => (
            <SelectItem onClick={() => handleDropDownClick(value)} key={index}>
              <p>{value}</p>
            </SelectItem>
          ))}
        </SelectList>
      </StyledDropdown>
      <StyledArrow />
    </SelectWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
