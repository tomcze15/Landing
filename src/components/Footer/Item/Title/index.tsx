import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import COLORS from '@/constants/colors';

const cssUnderline = (): SerializedStyles => css`
  position: relative;
  
  &::after {
    content: '';
    width: 100%;
    height: 32%;
    bottom: 1px;
    left: 0;
    z-index: -1;
    position: absolute;
    background-color: ${COLORS.UNDERLINE};
  }
`;

const cssTitle = (): SerializedStyles => css`
  margin-bottom: 36px;
  font-size: 24px;
  font-weight: bold;
`;

interface Props {
  children?: React.ReactNode;
  underline?: boolean;
}

const Title = ({ children, underline = false }: Props): JSX.Element => (
  <h3 css={ cssTitle }>
    { underline ? <span css={ cssUnderline }>{ children }</span> : children }
  </h3>
);

export default Title;
