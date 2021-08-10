import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import COLORS from '@/constants/colors';

export const cssLi = (): SerializedStyles => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const cssA = (): SerializedStyles => css`
  width: 24px;
  height: 24px;
`;

interface Props {
  children?: React.ReactNode;
  href?: string;
}

const Item = ({ children, href = '/' }: Props): JSX.Element => (
  <li css={ cssLi }>
    <a
      css={ cssA }
      href={ href }
    >
      { children }
    </a>
  </li>
);

export default Item;
