import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import COLORS from '@/constants/colors';
import SHADOWS from '@/constants/shadows';

const cssItem = (): SerializedStyles => css`
  border: 1px solid ${COLORS.BORDER_CLIPART};
  padding: 30px;
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 16px 32px 0 ${SHADOWS.DEFAULT};
  }
`;

const cssTitle = (): SerializedStyles => css`
  font-size: 24px;
  line-height: 1.17;
  margin-bottom: 16px;
`;

const cssDescription = (): SerializedStyles => css`
  font-size: 14px;
  line-height: 1.86;
`;

const cssImg = (): SerializedStyles => css`
  margin-bottom: 24px;
`;

interface Props {
  title: string;
  image: string;
  children?: React.ReactNode;
}

const ClipartCard = ({ title, image, children }: Props): JSX.Element => (
  <div css={ cssItem }>
    <img
      alt="Main img"
      css={ cssImg }
      src={ image }
    />
    <h3 css={ cssTitle }>{ title }</h3>
    <p css={ cssDescription }>{ children }</p>
  </div>
);

export default ClipartCard;
