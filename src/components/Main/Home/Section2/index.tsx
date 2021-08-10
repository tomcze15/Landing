import { css, SerializedStyles } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import TextColumn from '@/components/Main/Home/Section2/TextColumn';
import COLORS from '@/constants/colors';

const cssSection2 = (): SerializedStyles => css`
  background-color: ${COLORS.SECTION2_BG};
  width: 100%;
  padding: 60px 16px;
  display: flex;
  justify-content: center;

  @media (min-width: 576px) {
    padding: 60px 24px;
  }

  @media (min-width: 768px) {
    padding: 80px 30px;
  }

  @media (min-width: 992px) {
    padding: 80px 40px;
  }

  @media (min-width: 1200px) {
    padding: 80px 56px;
  }
`;

const cssFlex = (): SerializedStyles => css`
  max-width: 1400px;
  
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

const Section2 = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div css={ cssSection2 }>
      <div css={ cssFlex }>
        <TextColumn label={ t('S2_TITLE_1') }>
          { t('S2_DESCRIPTION') }
        </TextColumn>
        <TextColumn label={ t('S2_TITLE_2') }>
          { t('S2_DESCRIPTION') }
        </TextColumn>
      </div>
    </div>
  );
};

export default Section2;
