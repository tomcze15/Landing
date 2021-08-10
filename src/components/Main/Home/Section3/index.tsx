import { css, SerializedStyles } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Clipart1, Clipart2, Clipart3, Clipart4, Clipart5, Clipart6, Image1, Image2, Image3, LandingDesktop, LandingMobile, LandingMoney } from '@/assets';
import Button from '@/components/Button';
import ArticleCardList from '@/components/Main/Home/Section3/ArticleCardList';
import ArticleCard from '@/components/Main/Home/Section3/ArticleCardList/ArticleCard';
import BoxImage from '@/components/Main/Home/Section3/BoxImage';
import ClipartCardList from '@/components/Main/Home/Section3/ClipartCardList';
import ClipartCard from '@/components/Main/Home/Section3/ClipartCardList/ClipartCard';
import Dropdown from '@/components/Main/Home/Section3/Dropdown';
import SimpleBox from '@/components/Main/Home/Section3/SimpleBox';
import WrappedIcons from '@/components/Main/Home/Section3/WrappedIcons';

const cssSection = (): SerializedStyles => css`
  padding: 60px 16px;

  @media (min-width: 992px) {
    padding: 100px 40px;
  }
`;

const Section3 = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div css={ cssSection }>
      <WrappedIcons />
      <BoxImage
        description={ t('BOXIMAGE_1_DESCRIPTION') }
        image={ LandingDesktop }
        imagePosition="right"
        title={ t('BOXIMAGE_1_TITLE') }
        titleToUnderline={ t('BOXIMAGE_1_TITLE_UNDERLINE') }
      >
        <Dropdown />
      </BoxImage>
      <BoxImage
        description={ t('BOXIMAGE_2_DESCRIPTION') }
        image={ LandingMobile }
        title={ t('BOXIMAGE_2_TITLE') }
        titleToUnderline={ t('BOXIMAGE_2_TITLE_UNDERLINE') }
      >
        <Button
          color="purple"
          label={ t('BUTTON_CONTACT') }
          size="large"
        />
      </BoxImage>
      <SimpleBox
        label={ t('SIMPLEBOX_TITLE_1') }
        textToUnderline={ t('SIMPLEBOX_UNDERLINE_TITLE_1') }
      >
        { t('SIMPLEBOX_DESCRIPTION_1') }
      </SimpleBox>
      <ClipartCardList>
        <ClipartCard
          image={ Clipart1 }
          title={ t('DATA_ANALYSIS_TITLE') }
        >
          { t('DATA_ANALYSIS_DESCRIPTION') }
        </ClipartCard>
        <ClipartCard
          image={ Clipart2 }
          title={ t('SEO_OPTIMIZATION_TITLE') }
        >
          { t('SEO_OPTIMIZATION_DESCRIPTION') }
        </ClipartCard>
        <ClipartCard
          image={ Clipart3 }
          title={ t('APP_DEVELOPMENT_TITLE') }
        >
          { t('APP_DEVELOPMENT_DESCRIPTION') }
        </ClipartCard>
        <ClipartCard
          image={ Clipart4 }
          title={ t('WEB_DESIGN_TITLE') }
        >
          { t('WEB_DESIGN_DESCRIPTION') }
        </ClipartCard>
        <ClipartCard
          image={ Clipart5 }
          title={ t('BRANDING_TITLE') }
        >
          { t('BRANDING_DESCRIPTION') }
        </ClipartCard>
        <ClipartCard
          image={ Clipart6 }
          title={ t('MARKETING_PLAN_TITLE') }
        >
          { t('MARKETING_PLAN_DESCRIPTION') }
        </ClipartCard>
      </ClipartCardList>
      <BoxImage
        description={ t('BOXIMAGE_3_DESCRIPTION') }
        image={ LandingMoney }
        imagePosition="right"
        title={ t('BOXIMAGE_3_TITLE') }
        titleToUnderline={ t('BOXIMAGE_3_TITLE_UNDERLINE') }
      >
        <Button
          color="purple"
          label={ t('BUTTON_CONTACT') }
          size="large"
        />
      </BoxImage>
      <SimpleBox
        label={ t('SIMPLEBOX_TITLE_2') }
        textToUnderline={ t('SIMPLEBOX_UNDERLINE_TITLE_2') }
      >
        { t('SIMPLEBOX_DESCRIPTION_2') }
      </SimpleBox>
      <ArticleCardList>
        <ArticleCard
          date={ t('ARTICLECARD_1_DATE') }
          image={ Image1 }
          title={ t('ARTICLECARD_1_TITLE') }
        >
          { t('ARTICLECARD_1_DESCRIPTION') }
        </ArticleCard>
        <ArticleCard
          date={ t('ARTICLECARD_2_DATE') }
          image={ Image2 }
          title={ t('ARTICLECARD_2_TITLE') }
        >
          { t('ARTICLECARD_2_DESCRIPTION') }
        </ArticleCard>
        <ArticleCard
          date={ t('ARTICLECARD_3_DATE') }
          image={ Image3 }
          title={ t('ARTICLECARD_3_TITLE') }
        >
          { t('ARTICLECARD_3_DESCRIPTION') }
        </ArticleCard>
      </ArticleCardList>
    </div>
  );
};

export default Section3;
