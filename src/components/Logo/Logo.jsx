import { useMediaQuery } from 'hooks/useMediaQuery';
import { LogoBox, TextTitle } from './Logo.styled';
import { LogoImage } from './svg-components/LogoImage';
import { LogoTitle } from './svg-components/LogoTitle';

export const Logo = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <LogoBox>
      <LogoImage size={isMobile ? '30' : '40'} />
      <TextTitle>Wallet</TextTitle>
      {isMobile && <LogoTitle />}
    </LogoBox>
  );
};
