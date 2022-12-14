import { useState } from 'react';
import { Tabs } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { TabListStyled, TabStyled, ImgStyled } from './LanguageSwitcher.styled';
import englishFlag from 'images/lang-switcher/lang-english.png';
import ukraineFlag from 'images/lang-switcher/lang-ukraine.png';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const initialState = i18n.language === 'en' ? true : false;

  const [isActive, setIsActive] = useState(initialState);

  const sizeEngImg = !isActive ? '20px' : '30px';
  const sizeUkrImg = isActive ? '20px' : '30px';

  const changeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ua');
    } else {
      i18n.changeLanguage('en');
    }
    setIsActive(!isActive);
  };

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="accent">
        <TabListStyled>
          <TabStyled onClick={changeLanguage} opacity={sizeEngImg}>
            <ImgStyled
              boxSize={sizeEngImg}
              src={englishFlag}
              alt="change english language"
              pos={sizeEngImg}
            />
          </TabStyled>
          <TabStyled onClick={changeLanguage} opacity={sizeUkrImg}>
            <ImgStyled
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
