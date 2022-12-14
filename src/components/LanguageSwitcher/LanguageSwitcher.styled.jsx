import styled from '@emotion/styled';
import { Image, Tab, TabList } from '@chakra-ui/react';

export const TabListStyled = styled(TabList)`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const TabStyled = styled(Tab)`
  @media (min-width: 768px) {
    opacity: ${p => (p.opacity !== '30px' ? 0.5 : 1)};

    &:first-of-type {
      margin-right: 12px;
    }
  }
`;

export const ImgStyled = styled(Image)`
  margin-right: 0;
  display: ${p => (p.pos === '30px' ? 'none' : 'flex')};

  @media (min-width: 768px) {
    display: flex;
  }
`;
