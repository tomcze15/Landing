import { css, SerializedStyles } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/Button';
import ImageContainer from '@/components/Main/Home/Section1/ImageContainer';
import { cssButtons, cssDescription, cssMargin, cssSideLeft, cssSides, cssTitle } from '@/components/Main/Home/Section1/style';
import Underline from '@/components/Main/Home/Underline';
import COLORS from '@/constants/colors';

const cssSection1 = (): SerializedStyles => css`
  width: 100%;
  background-color: ${COLORS.HEADER_BG};
  padding: 38px 24px 104px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 576px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 992px) {
    padding: 34px 40px 122px;
  }

  @media (min-width: 1200px) {
    padding: 86px 24px 162px 56px;
  }
`;

const Section1 = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div css={ cssSection1 }>
      <div css={ css`max-width:1400px;` }>
        <div css={ cssSides }>
          <div css={ cssSideLeft }>
            <div css={ cssMargin }>
              <Underline
                cssStyle={ cssTitle() }
                text={ t('S1_TITLE') }
                underlineWord={ t('S1_TITLE_UNDERLINE') }
              />
            </div>
            <div css={ [cssMargin, cssDescription] }>
              <p>{ t('S1_DESCRIPTION') }</p>
            </div>
            <div css={ cssButtons }>
              <Button
                color="purple"
                label={ t('BUTTON_LEARN') }
                size="medium"
              />
              <Button
                color="orange"
                label={ t('BUTTON_CONTACT') }
                size="medium"
              />
            </div>
          </div>
          <ImageContainer />
        </div>
      </div>
    </div>
  );
};

export default Section1;
