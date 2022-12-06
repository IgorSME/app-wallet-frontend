import React from 'react';

import {
  Box,
  Wrapper,
  SelectStyled,
  IconStyled,
  OptionStyled,
} from './StatisticsFilterSelect.styled';
import sprite from 'images/svg-sprite.svg';

import months from 'assets/data/months.json';

export function StatisticsFilterSelect({ handleChangeSearch, currentFilter }) {
  const { year, month } = currentFilter;

  const thisYear = new Date().getFullYear();
  const yearsList = Array.from(new Array(6), (_, index) => thisYear - index);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    handleChangeSearch(name, value);
  };

  return (
    <Box>
      <Wrapper>
        <SelectStyled onChange={handleChange} name="month" value={month}>
          <OptionStyled hidden value="">
            Month
          </OptionStyled>
          {months.map(({ name }) => (
            <OptionStyled key={name} value={name}>
              {name}
            </OptionStyled>
          ))}
        </SelectStyled>

        <IconStyled>
          <use href={`${sprite}#icon-vector`}></use>
        </IconStyled>
      </Wrapper>
      <Wrapper>
        <SelectStyled onChange={handleChange} name="year" value={year}>
          <OptionStyled hidden value={''}>
            Year
          </OptionStyled>
          {yearsList.map(item => (
            <OptionStyled key={item} value={item}>
              {item}
            </OptionStyled>
          ))}
        </SelectStyled>
        <IconStyled>
          <use href={`${sprite}#icon-vector`}></use>
        </IconStyled>
      </Wrapper>
    </Box>
  );
}
