import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

const cssGrid = (): SerializedStyles => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 36px;
  margin-bottom: 60px;
  max-width: 1400px;

  @media (min-width: 576px) {
    margin-bottom: 80px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 36px;
    grid-row-gap: 36px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

interface Props {
  children?: React.ReactNode;
}

const ClipartCardList = ({ children }: Props): JSX.Element => (
  <div css={ cssGrid }>
    { children }
  </div>
);

export default ClipartCardList;
