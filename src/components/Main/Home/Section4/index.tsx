import { css, SerializedStyles } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/Button';
import COLORS from '@/constants/colors';

const cssBg = (): SerializedStyles => css`
  background-color: ${COLORS.SECTION4_BG};
  width: 100%;
  height: 100%;
`;

const cssContent = (): SerializedStyles => css`
  padding: 110px 16px;
  text-align: center;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    padding: 110px 24px;
  }

  @media (min-width: 768px) {
    padding: 110px 108px;
  }

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 112px 40px;
  }
`;

const cssTitle = (): SerializedStyles => css`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 36px;

  @media (min-width: 576px) {
    font-size: 30px;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const Section4 = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div css={ cssBg }>
      <div css={ cssContent }>
        <h2 css={ cssTitle }>{ t('S4_TITLE') }</h2>
        <Button
          color="purple"
          label={ t('BUTTON_START') }
          size="max"
        />
      </div>
    </div>
  );
};

export default Section4;
