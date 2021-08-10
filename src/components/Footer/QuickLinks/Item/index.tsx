import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import COLORS from '@/constants/colors';

const cssLi = (): SerializedStyles => css`
  list-style-type: none;
  margin-bottom: 10px;
  cursor: pointer;
`;

const cssA = (): SerializedStyles => css`
  text-decoration: none;
  font-size: 16px;
  line-height: 1.88;
  color: ${COLORS.WHITE};
`;

interface Props {
  label: string;
  href?: string;
}

const Item = ({ label, href = '/' }: Props): JSX.Element => (
  <li css={ cssLi }>
    <a
      css={ cssA }
      href={ href }
    >
      { label }
    </a>
  </li>
);

export default Item;
