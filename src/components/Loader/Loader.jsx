import { Circles } from 'react-loader-spinner';
import { LoaderStyled, LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <Circles color="#24CCA7" height="80" width="80" ariaLabel="circles" />
    </LoaderStyled>
  );
};

export const LoaderStatistics = () => {
  return (
    <LoaderContainer>
      <Circles color="#24CCA7" height="80" width="80" ariaLabel="circles" />
    </LoaderContainer>
  );
};
