import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import COLORS from '@/constants/colors';

const cssTitle = (): SerializedStyles => css`
  font-size: 60px;
  font-weight: bold;
  line-height: 1.27;
  margin-bottom: 36px;
`;

const cssDescription = (): SerializedStyles => css`
  font-size: 20px;
  line-height: 1.4;
  max-width: 540px;
`;

const cssSection1 = (): SerializedStyles => css`
  width: 100%;
  background-color: ${COLORS.HEADER_BG};
  padding-top: 228px;
  padding-bottom: 316px;
`;

const cssContent = (): SerializedStyles => css`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
`;

interface Props {
  title: string;
  children?: React.ReactNode;
}

const Section1 = ({ title, children }: Props): JSX.Element => (
  <div css={ cssSection1 }>
    <div>
      <div css={ cssContent }>
        <h1 css={ cssTitle }>{ title }</h1>
        <p css={ cssDescription }>{ children }</p>
      </div>
    </div>
  </div>
);

export default Section1;
