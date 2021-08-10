import { css, SerializedStyles } from '@emotion/react';

export const cssButtons = (): SerializedStyles => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  justify-items: left;

  @media (min-width: 375px) {
    grid-template-columns: repeat(2, 150px);
    grid-column-gap: 30px;
  }
`;

export const cssMargin = (): SerializedStyles => css`
  margin-bottom: 30px;
  margin-right: 20px;

  @media (min-width: 992px) {
    margin-right: 0;
    margin-bottom: 36px;
  }
`;

export const cssTitle = (): SerializedStyles => css`
  font-size: 32px;
  line-height: 1.31;
  font-weight: bold;

  @media (min-width: 992px) {
    font-size: 44px;
    line-height: 1.27;
  }

  @media (min-width: 1200px) {
    font-size: 60px;
    line-height: 1.27;
  }
`;

export const cssDescription = (): SerializedStyles => css`
  font-size: 12px;
  line-height: 1.67;
 
  @media (min-width: 992px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 56px;
  }
`;

export const cssSides = (): SerializedStyles => css`
  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const cssSideLeft = (): SerializedStyles => css`
  @media (min-width: 576px) {
    margin-right: 52px;
  }

  @media (min-width: 768px) {
    margin-right: 34px;
    width: 50%;
  }

  @media (min-width: 992px) {
    margin-right: 46px;
  }
`;
