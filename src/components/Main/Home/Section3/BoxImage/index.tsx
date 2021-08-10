import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import Underline from '@/components/Main/Home/Underline';

type Position = 'left' | 'right';

const cssBox = (): SerializedStyles => css`
  margin-bottom: 60px;
  max-width: 1400px;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const cssTitle = (): SerializedStyles => css`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 36px;
`;

const cssDescription = (): SerializedStyles => css`
  font-size: 16px;
  line-height: 1.88;
  margin-bottom: 36px;
`;

const cssImg = (imagePosition: Position): SerializedStyles => css`
  width: 100%;

  @media (min-width: 992px) {
    order: ${imagePosition === 'right' ? 2 : 1};
    width: 50%;
  }
`;

const cssContent = (imagePosition: Position): SerializedStyles => css`
  @media (min-width: 992px) {
    order: ${imagePosition === 'right' ? 1 : 2};
    width: 50%;
    margin-right: ${imagePosition === 'right' ? 36 : 0}px;
    margin-left: ${imagePosition === 'left' ? 36 : 0}px;
  }
`;

interface Props {
  title: string;
  titleToUnderline?: string;
  description: string;
  image: string;
  children?: React.ReactNode;
  imagePosition?: Position;
}

const BoxImage = ({ children, imagePosition = 'left', title, image, titleToUnderline = '', description }: Props): JSX.Element => (
  <div css={ cssBox() }>
    <img
      alt="Person sits at the table"
      css={ cssImg(imagePosition) }
      src={ image }
    />
    <div css={ cssContent(imagePosition) }>
      <Underline
        cssStyle={ cssTitle() }
        priority="2"
        text={ title }
        underlineWord={ titleToUnderline }
      />
      <p css={ cssDescription }>{ description }</p>
      { children }
    </div>
  </div>
);

export default BoxImage;
