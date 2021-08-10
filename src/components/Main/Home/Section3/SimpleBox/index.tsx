import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import Underline from '@/components/Main/Home/Underline';

const cssBox = (): SerializedStyles => css`
  text-align: center;
  margin-bottom: 36px;

  &:nth-of-type(2) {
    margin-bottom: 60px;
  }

  @media (min-width: 576px) {
    margin-bottom: 80px;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const cssTitle = (): SerializedStyles => css`
  margin-bottom: 36px;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
`;

const cssDescription = (): SerializedStyles => css`
  font-size: 16px;
  line-height: 1.88;
  max-width: 682px;
`;

interface Props {
  label: string;
  textToUnderline?: string;
  children?: React.ReactNode;
}

const SimpleBox = ({ label, textToUnderline = '', children }: Props): JSX.Element => (
  <div css={ cssBox }>
    <Underline
      cssStyle={ cssTitle() }
      priority="2"
      text={ label }
      underlineWord={ textToUnderline }
    />
    <p css={ cssDescription }>
      { children }
    </p>
  </div>
);

export default SimpleBox;
