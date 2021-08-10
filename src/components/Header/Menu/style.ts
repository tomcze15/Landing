import { css, SerializedStyles } from '@emotion/react';

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
