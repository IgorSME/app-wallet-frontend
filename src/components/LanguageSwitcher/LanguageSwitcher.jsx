import { Image, Tab, TabList, Tabs } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { useTranslation } from 'react-i18next';

import englishFlag from 'images/lang-switcher/lang-english.png';
import ukraineFlag from 'images/lang-switcher/lang-ukraine.png';
import { useState } from 'react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const initialState = i18n.language === 'en' ? true : false;

  const [isActive, setIsActive] = useState(initialState);

  const sizeEngImg = !isActive ? '20px' : '30px';
  const sizeUkrImg = isActive ? '20px' : '30px';

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="accent">
        <TabListStyled>
          <TabStyled>
            <ImgStyled
              onClick={() => {
                setIsActive(!isActive);
                i18n.changeLanguage('en');
              }}
              boxSize={sizeEngImg}
              // boxShadow={isActive === true && '0px 6px 15px rgba(0, 0, 0, 0.1)'}
              // borderRadius="full"
              src={englishFlag}
              alt="change english language"
              pos={sizeEngImg}
            />
          </TabStyled>
          <TabStyled>
            <ImgStyled
              onClick={() => {
                setIsActive(!isActive);
                i18n.changeLanguage('ua');
              }}
              boxSize={sizeUkrImg}
              // borderRadius="full"
              src={ukraineFlag}
              alt="change ukrainian language"
              pos={sizeUkrImg}
            />
          </TabStyled>
        </TabListStyled>
      </Tabs>
    </>
  );
};

const TabListStyled = styled(TabList)`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const TabStyled = styled(Tab)`
  @media (min-width: 768px) {
    &:first-of-type {
      margin-right: 12px;
    }
  }
`;

const ImgStyled = styled(Image)`
  margin-right: 0;
  display: ${p => (p.pos === '30px' ? 'none' : 'flex')};

  @media (min-width: 768px) {
    display: flex;
  }
`;
