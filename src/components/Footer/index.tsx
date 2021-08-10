import { css } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { IconTwitterBlue, GooglePlayButton, AppStoreButton, IconFacebook, IconTwitterGrey, IconInstagram } from '@/assets';
import Item from '@/components/Footer/Item';
import Title from '@/components/Footer/Item/Title';
import QuickLinks from '@/components/Footer/QuickLinks';
import SocialList from '@/components/Footer/SocialList';
import SocialItem from '@/components/Footer/SocialList/Item';
import { cssData, cssFooter, cssImg, cssFlexColumn, cssButtons, cssDescription, cssGrid } from '@/components/Footer/styles';
import { QUICKLINKS_ITEMS } from '@/constants/items';

const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <footer css={ cssFooter }>
      <div css={ cssGrid }>
        <Item>
          <Title underline>{ t('MILU_TITLE') }</Title>
          <p css={ cssDescription }>
            { t('MILU_DESCRIPTION') }
          </p>
        </Item>
        <Item>
          <Title>{ t('QUICKLINKS_TITLE') }</Title>
          <QuickLinks items={ QUICKLINKS_ITEMS } />
        </Item>
        <Item>
          <Title>{ t('LASTTWEET_TITLE') }</Title>
          <div css={ css`display: flex;` }>
            <img
              alt="Twitter icon blue"
              css={ cssImg }
              src={ IconTwitterBlue }
            />
            <div css={ cssFlexColumn }>
              <p css={ cssData }>
                { t('LASTTWEET_DATE') }
              </p>
              <p css={ cssDescription }>
                { t('LASTTWEET_DESCRIPTION') }
              </p>
            </div>
          </div>
        </Item>
        <Item>
          <Title>{ t('DOWNLOAD_TITLE') }</Title>
          <p css={ [css`margin-bottom: 36px;`, cssDescription] }>
            { t('DOWNLOAD_DESCRIPTION') }
          </p>
          <div css={ cssButtons }>
            <a href="/">
              <img
                alt="Google Play"
                src={ GooglePlayButton }
              />
            </a>
            <a href="/">
              <img
                alt="App store"
                src={ AppStoreButton }
              />
            </a>
          </div>
          <SocialList>
            <SocialItem href="/">
              <img
                alt="Facebook icon"
                src={ IconFacebook }
              />
            </SocialItem>
            <SocialItem href="/">
              <img
                alt="Twitter icon grey"
                src={ IconTwitterGrey }
              />
            </SocialItem>
            <SocialItem href="">
              <img
                alt="Instagram icon"
                src={ IconInstagram }
              />
            </SocialItem>
          </SocialList>
        </Item>
      </div>
    </footer>
  );
};

export default Footer;
