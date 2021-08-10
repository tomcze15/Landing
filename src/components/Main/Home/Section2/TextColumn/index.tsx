import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

const cssTitle = (): SerializedStyles => css`
  font-size: 24px;
  margin-bottom: 36px;
  font-weight: bold;
  line-height: 1.5;
`;

const cssDescription = (): SerializedStyles => css`
  font-size: 16px;
  line-height: 1.88;
`;

const cssTextColumn = (): SerializedStyles => css`
  &:first-of-type {
    margin-bottom: 36px;
  }

  @media (min-width: 992px) {
    &:first-of-type {
      margin-right: 36px;
      margin-bottom: 0;
    }
  }
`;

interface Props {
  label: string;
  children?: React.ReactNode;
}

const TextColumn = ({ label, children }: Props): JSX.Element => (
  <div css={ cssTextColumn }>
    <h2 css={ cssTitle }>{ label }</h2>
    <p css={ cssDescription }>{ children }</p>
  </div>
);

export default TextColumn;
