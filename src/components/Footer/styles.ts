import { css, SerializedStyles } from '@emotion/react';

import COLORS from '@/constants/colors';

export const cssFooter = (): SerializedStyles => css`
  position: relative;
  background-color: ${COLORS.FOOTER_BG};
  padding: 80px 16px;
  color: ${COLORS.WHITE};
  z-index: -2;

  @media (min-width: 576px) {
    padding: 80px 24px;
  }

  @media (min-width: 992px) {
    padding: 80px 40px;
  }

  @media (min-width: 1200px) {
    padding: 80px 56px;
  }
`;

export const cssGrid = (): SerializedStyles => css`
  display: grid;
  grid-row-gap: 36px;
  max-width: 1400px;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 30px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 50px;
  }

  @media (min-width: 1400px) {
    grid-column-gap: 60px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const cssData = (): SerializedStyles => css`
  font-size: 16px;
  line-height: 1.88;
  color: ${COLORS.GRAY};
`;

export const cssImg = (): SerializedStyles => css`
  width: 20px;
  height: 20px;
  position: relative;
  top: 5px;
`;

export const cssFlexColumn = (): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const cssButtons = (): SerializedStyles => css`
  display: grid;
  grid-template-columns: 134px;
  grid-row-gap: 36px;
  margin-bottom: 80px;

  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(2, 134px);
    grid-template-rows: auto;
    grid-column-gap: 24px;
  }

  @media (min-width: 576px) {
    margin-top: 36px;
    grid-template-columns: 134px;
    grid-template-rows: auto;
    grid-row-gap: 24px;
  }

  @media (min-width: 768px) { 
    grid-template-columns: repeat(2, 134px);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const cssSocial = (): SerializedStyles => css`
  display: flex;
  justify-content: flex-end;
`;

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

export const cssDescription = (): SerializedStyles => css`
  font-size: 16px;
  line-height: 1.88;
`;
