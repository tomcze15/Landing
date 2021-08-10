import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import COLORS from '@/constants/colors';
import GRADIENTS from '@/constants/gradients';
import SHADOWS from '@/constants/shadows';

type ColorType = 'purple' | 'orange';
type SizeType = 'small' | 'medium' | 'large' | 'max';

const styleMap = {
  small: { width: '122px', height: '40px' },
  medium: { width: '150px', height: '48px' },
  large: { width: '150px', height: '52px' }
};

const cssButton = (color: ColorType): SerializedStyles => css`
  border-radius: 24px;
  border: none;
  font-weight: bold;
  line-height: 1.33;
  font-size: 12px;
  color: ${COLORS.WHITE};
  cursor: pointer;

  &:hover {
    box-shadow: 0 16px 32px 0 ${SHADOWS.DEFAULT};
  }
  
  background-image: ${color === 'orange' ? GRADIENTS.ORANGE : GRADIENTS.PURPLE};

  &:hover {
    background-image: ${color === 'orange' ? GRADIENTS.ORANGE_HOVER : GRADIENTS.PUPRLE_HOVER};
  }
`;

const cssSmall = (): SerializedStyles => css`
  width: ${styleMap.small.width};
  height: ${styleMap.small.height};

  @media (max-width: 991px) {
    display: none;
  }
`;

const cssMedium = (): SerializedStyles => css`
  width: ${styleMap.medium.width};
  height: ${styleMap.medium.height};
`;

const cssLarge = (): SerializedStyles => css`
  width: ${styleMap.large.width};
  height: ${styleMap.large.height};
`;

const cssMax = (): SerializedStyles => css`
  width: 100%;
  height: ${styleMap.large.height};
  
  @media (min-width: 992px) {
    width: ${styleMap.large.width};
  }
`;

const cssMap = {
  small: cssSmall,
  medium: cssMedium,
  large: cssLarge,
  max: cssMax
};

interface Props {
  color: ColorType;
  label: string;
  size?: SizeType;
}

const Button = ({ label, color, size = 'small' }: Props): JSX.Element => (
  <button
    css={ [
      cssButton(color),
      cssMap[size]
    ] }
    type="button"
  >
    { label }
  </button>
);

export default Button;
