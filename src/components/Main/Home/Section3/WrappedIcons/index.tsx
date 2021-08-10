import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import { Logo1, Logo2, Logo3, Logo4, Logo5 } from '@/assets';

const cssUl = (): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 375px) {
    flex-direction: row;
    margin: 0 11px 60px 11px;
    list-style-type: none;
  }

  @media (min-width: 992px) {
    margin-bottom: 100px;
  }
`;

const cssItem = (): SerializedStyles => css`
  margin: 0 10px;
  display: none;

  &:nth-of-type(1),
  &:nth-of-type(2) {
    display: block;
  }

  @media (min-width: 576px) {
    margin: 0 63px;
  }

  @media (min-width: 768px) {
    margin: 0 43px;

    &:nth-of-type(3) {
      display: block;
    }
  }

  @media (min-width: 992px) {
    &:nth-of-type(4) {
      display: block;
    }
  }

  @media (min-width: 1200px) {
    margin: 0 50px;

    &:nth-of-type(5) {
      display: block;
    }
  }

  @media (min-width: 1400px) {
    margin: 0 65px;
  }
`;

const cssImg = (): SerializedStyles => css`
  width: 150px;
  height: 120px;
`;

const WrappedIcons = (): JSX.Element => (
  <ul css={ cssUl }>
    <li css={ cssItem }>
      <img
        alt="Logo 1"
        css={ cssImg }
        src={ Logo1 }
      />
    </li>
    <li css={ cssItem }>
      <img
        alt="Logo 2"
        css={ cssImg }
        src={ Logo2 }
      />
    </li>
    <li css={ cssItem }>
      <img
        alt="Logo 3"
        css={ cssImg }
        src={ Logo3 }
      />
    </li>
    <li css={ cssItem }>
      <img
        alt="Logo 4"
        css={ cssImg }
        src={ Logo4 }
      />
    </li>
    <li css={ cssItem }>
      <img
        alt="Logo 5"
        css={ cssImg }
        src={ Logo5 }
      />
    </li>
  </ul>
);

export default WrappedIcons;
