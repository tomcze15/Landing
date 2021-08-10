import { css, SerializedStyles } from '@emotion/react';
import uniqueId from 'lodash/uniqueId';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { Type } from '@/components/Header/Menu';
import COLORS from '@/constants/colors';

const cssLi = (type?: Type): SerializedStyles => css`
  list-style-type: none;
  font-size: 14px;
  font-weight: bold;
  padding: 0 ${type === 'menu' ? 25 : 0}px;
  margin-bottom: ${type === 'mobile' ? 30 : 0}px;
`;

const cssA = (): SerializedStyles => css`
  text-decoration: none;
  color: ${COLORS.DEFAULT_MENU_TEXT};
`;

const focused = {
  color: COLORS.DEFAULT_TEXT
};

interface Props {
  label: string;
  type?: Type;
  href?: string;
}

const Item = ({ label, type = 'menu', href = '/' }: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <li
      key={ uniqueId() }
      css={ cssLi(type) }
    >
      <NavLink
        activeStyle={ focused }
        css={ cssA() }
        exact
        to={ href }
      >
        { t([label]) }
      </NavLink>
    </li>
  );
};

export default Item;
