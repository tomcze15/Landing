import { css, SerializedStyles } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { IconChevronRight } from '@/assets';

const cssImg = (): SerializedStyles => css`
  width: 100%;
  margin-bottom: 20px;
`;

const cssImageText = (): SerializedStyles => css`
  transform: rotate(-90deg);
  position: absolute;
  top: 40px;
  left: -5px;
  font-weight: bold;
  font-size: 14px;
`;

const cssTitle = (): SerializedStyles => css`
  font-size: 22px;
  line-height: 1.36;
  margin-bottom: 12px;
`;

const cssDate = (): SerializedStyles => css`
  font-size: 12px;
  line-height: 1.67;
  margin-bottom: 12px;
`;

const cssDescription = (): SerializedStyles => css`
  font-size: 16px;
  line-height: 1.88;
  margin-bottom: 20px;
`;

const cssReadMoreContent = (): SerializedStyles => css`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.67;
`;

const cssReadMoreImg = (): SerializedStyles => css`
  height: 10px;
  width: 10px;
`;

const cssContent = (): SerializedStyles => css`
  margin-bottom: 36px;

  @media (min-width: 576px) {
    margin-bottom: 60px;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

interface Props {
  image: string;
  title: string;
  date: string;
  children?: React.ReactNode;
}

const ArticleCard = ({ image, title, date, children }: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div css={ cssContent }>
      <div css={ css`position: relative;` }>
        <img
          alt="Main img"
          css={ cssImg }
          src={ image }
        />
        <div css={ cssImageText }>{ t('ARTICLECARD_DESIGN') }</div>
      </div>
      <div>
        <h3 css={ cssTitle }>{ title }</h3>
        <p css={ cssDate }>{ date }</p>
        <p css={ cssDescription }>{ children }</p>
        <div css={ cssReadMoreContent }>
          <div css={ css`margin-right: 4px;` }>{ t('ARTICLECARD_READMORE') }</div>
          <img
            alt="Chevron icon"
            css={ cssReadMoreImg }
            src={ IconChevronRight }
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
