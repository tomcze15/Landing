import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import COLORS from '@/constants/colors';

const cssSection2 = (): SerializedStyles => css`
  background-color: ${COLORS.SECTION2_BG};
  width: 100%;
  padding: 100px 313px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const cssTextCenter = (): SerializedStyles => css`
  text-align: center;
`;

const cssDescription = (): SerializedStyles => css`
  max-width: 682px;
  margin-bottom: 36px;
`;

interface Props {
  title: string;
  children?: React.ReactNode;
}

const Section2 = ({ title, children }: Props): JSX.Element => (
  <div css={ cssSection2 }>
    <div css={ css`max-width: 1400px;` }>
      <h2 css={ [cssTextCenter, cssDescription] }>
        { title }
      </h2>
      <p css={ [cssTextCenter, cssDescription] }>
        { children }
      </p>
    </div>
  </div>
);

export default Section2;
