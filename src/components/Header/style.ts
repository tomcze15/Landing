import { css, SerializedStyles } from '@emotion/react';

import COLORS from '@/constants/colors';
import SHADOWS from '@/constants/shadows';

export const cssMenuNormal = (): SerializedStyles => css`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.HEADER_BG};
  padding: 9px 24px;

  @media (min-width: 992px) {
    padding: 20px 40px;
  }

  @media (min-width: 1200px) {
    padding: 20px 56px;
  }
`;

export const cssFixedMenu = (): SerializedStyles => css`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${COLORS.WHITE};
  box-shadow: 0 4px 12px 0 ${SHADOWS.MENU};
  display: flex;
  list-style-type: none;
  font-size: 14px;
  font-weight: bold;
  z-index: 5;
`;

export const cssIcon = (): SerializedStyles => css`
  height: 48px;
  width: 48px;
`;

export const cssMenu = (): SerializedStyles => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
`;

export const cssIconMobile = (): SerializedStyles => css`
  height: 24px;
  width: 24px;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const cssListMenu = (): SerializedStyles => css`
  display: flex;
`;

export const cssElement = (): SerializedStyles => css`
  padding: 0 25px;

  @media (max-width: 991px) {
    display: none;
  }
`;
