import { Circles } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <Circles color="#24CCA7" height="80" width="80" ariaLabel="circles" />
    </LoaderStyled>
  );
};
