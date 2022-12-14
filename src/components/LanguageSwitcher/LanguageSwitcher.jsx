import { Image, Tab, TabList, Tabs } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { useTranslation } from 'react-i18next';

import englishFlag from 'images/lang-switcher/lang-english.png';
import ukraineFlag from 'images/lang-switcher/lang-ukraine.png';
import { useState } from 'react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [isActive, setIsActive] = useState(true);

  const sizeEngImg = !isActive ? '18px' : '26px';
  const sizeUkrImg = isActive ? '18px' : '26px';

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="accent">
        <TabListStyled>
          <Tab>
            <ImgStyled
              onClick={() => {
                setIsActive(!isActive);
                i18n.changeLanguage('en');
              }}
              boxSize={sizeEngImg}
              borderRadius="full"
              src={englishFlag}
              alt="change english language"
              mr="12px"
            />
          </Tab>
          <Tab>
            <Image
              onClick={() => {
                setIsActive(!isActive);
                i18n.changeLanguage('ua');
              }}
              boxSize={sizeUkrImg}
              borderRadius="full"
              src={ukraineFlag}
              alt="change ukrainian language"
            />
          </Tab>
        </TabListStyled>
      </Tabs>
    </>
  );
};

const TabListStyled = styled(TabList)`
  display: flex;

  @media (min-width: 768px) {
    width: 160px;
  }
  @media (min-width: 1279px) {
    width: 182px;
  }
`;

const ImgStyled = styled(Image)`
  margin-right: 0;
`;
