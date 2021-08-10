import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

const cssGrid = (): SerializedStyles => css`
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 28px;
  }
`;

interface Props {
  children?: React.ReactNode;
}

const ArticleCardList = ({ children }: Props): JSX.Element => (
  <div css={ cssGrid }>
    { children }
  </div>
);

export default ArticleCardList;
