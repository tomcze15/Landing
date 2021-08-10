import { css, SerializedStyles } from '@emotion/react';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

import { IconCross } from '@/assets';
import Item from '@/components/Header/Menu/Item';
import COLORS from '@/constants/colors';
import SHADOWS from '@/constants/shadows';

const cssUl = (): SerializedStyles => css`
  list-style-type: none;
  margin-top: 79px;
`;

const cssHeader = (): SerializedStyles => css`
  position: fixed;
  display: flex;
  height: 100%;
  top: 0;
  right: 0;
  box-shadow: 0 4px 12px 0 ${SHADOWS.MENU};
  background-color: ${COLORS.WHITE};
  color: ${COLORS.DEFAULT_TEXT};
  width: 80%;
  z-index: 10;
  padding: 21px 24px 0 32px;

  @media (min-width: 992px) {
    display: none;
  }
`;

const cssExit = (): SerializedStyles => css`
  height: 24px;
  width: 24px;
  margin-left: auto;
  order: 1;
`;

interface Items {
  label: string;
  href: string;
}

interface Props {
  items: Items[];
  toggleExitMenu: () => void;
}

const Mobile = ({ items, toggleExitMenu }: Props): JSX.Element => (
  <header css={ cssHeader }>
    <div
      css={ cssExit }
      onClick={ toggleExitMenu }
    >
      <img
        alt="Mobile exit"
        css={ css`cursor: pointer;` }
        src={ IconCross }
      />
    </div>
    <nav>
      <ul css={ cssUl }>
        {
          items.map(({ href, label }) => (
            <Item
              key={ uniqueId() }
              href={ href }
              label={ label }
              type="mobile"
            />
          ))
        }
      </ul>
    </nav>
  </header>
);

export default Mobile;
