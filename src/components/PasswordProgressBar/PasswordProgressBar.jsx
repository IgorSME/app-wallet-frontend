import React from 'react';
import { ProgressBarStyled } from './PasswordProgressBar.styled';

export default function PasswordProgressBar({ password }) {
  return (
    <>
      {password.length < 6 && (
        <ProgressBarStyled backgroundColor="#24CCA7" width="25%" />
      )}
      {password.length >= 6 && password.length < 9 && (
        <ProgressBarStyled backgroundColor="#24CCA7" width="50%" />
      )}
      {password.length >= 9 && (
        <ProgressBarStyled backgroundColor="#24CCA7" width="100%" />
      )}
    </>
  );
}
