import { jsx, css, SerializedStyles } from '@emotion/react';
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

type PriorityType = '1' | '2' | '3';

interface Props {
  text: string;
  underlineWord?: string;
  cssStyle?: SerializedStyles;
  priority?: PriorityType;
}

const Underline = ({ text, underlineWord = '', cssStyle, priority = '1' }: Props): JSX.Element => {
  let firstPart = '';
  let secondPart = '';
  let hasUnderline = false;
  let isFirstPart = true;

  text.split(' ').forEach((word) => {
    if (word === underlineWord.toString()) {
      isFirstPart = false;
      hasUnderline = true;
      return;
    }

    if (isFirstPart) {
      firstPart += `${word} `;
    } else {
      secondPart += ` ${word}`;
    }
  });

  if (!hasUnderline) {
    firstPart = firstPart.substring(0, firstPart.length - 1);
  }

  return (
    jsx(
      `h${priority}`,
      { css: cssStyle },
      firstPart,
      hasUnderline ? <span css={ cssUnderline }>{ underlineWord }</span> : null,
      secondPart
    )
  );
};

export default Underline;
