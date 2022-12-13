import React, { useState } from 'react';

import {
  Box,
  Wrapper,
  IconStyled,
  SelectButton,
  SelectList,
  SelectItem,
  OverlaySelect,
} from './StatisticsFilterSelect.styled';
import sprite from 'images/svg-sprite.svg';

import months from 'assets/data/months.json';

export function StatisticsFilterSelect({ handleChangeSearch, currentFilter }) {
  const { year, month } = currentFilter;

  const [isActiveMonth, setIsActiveMonth] = useState(false);
  const [isActiveYear, setIsActiveYear] = useState(false);

  const [selectedMonth, setSelectedMonth] = useState(month ?? 'Month');
  const [selectedYear, setSelectedYear] = useState(year ?? 'Year');

  const thisYear = new Date().getFullYear();
  const yearsList = Array.from(new Array(6), (_, index) => thisYear - index);

  const handleChange = e => {
    const name = e.target.attributes.name.textContent;
    const value = e.target.textContent;

    if (name === 'month') {
      setSelectedMonth(value);
    } else {
      setSelectedYear(value);
    }

    handleChangeSearch(name, value);
    setIsActiveMonth(false);
    setIsActiveYear(false);
  };

  const closeSelect = e => {
    setIsActiveMonth(false);
    setIsActiveYear(false);
  };

  return (
    <Box>
      <OverlaySelect onClick={closeSelect} />
      <Wrapper>
        <SelectButton
          onClick={() => {
            if (isActiveYear) setIsActiveYear(!isActiveYear);
            setIsActiveMonth(!isActiveMonth);
          }}
        >
          {selectedMonth}
          <IconStyled>
            <use href={`${sprite}#icon-vector`}></use>
          </IconStyled>
        </SelectButton>

        {isActiveMonth && (
          <SelectList>
            {months.map(month => (
              <SelectItem key={month} name="month" onClick={handleChange}>
                {month}
              </SelectItem>
            ))}
          </SelectList>
        )}
      </Wrapper>

      <Wrapper>
        <SelectButton
          onClick={() => {
            if (isActiveMonth) setIsActiveMonth(!isActiveMonth);
            setIsActiveYear(!isActiveYear);
          }}
        >
          {selectedYear}
          <IconStyled>
            <use href={`${sprite}#icon-vector`}></use>
          </IconStyled>
        </SelectButton>

        {isActiveYear && (
          <SelectList>
            {yearsList.map(item => (
              <SelectItem key={item} name="year" onClick={handleChange}>
                {item}
              </SelectItem>
            ))}
          </SelectList>
        )}
      </Wrapper>
    </Box>
  );
}
