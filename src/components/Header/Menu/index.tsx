import { css, SerializedStyles } from '@emotion/react';
import uniqueId from 'lodash/uniqueId';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { IconLogo, IconMenu } from '@/assets';
import Button from '@/components/Button';
import Item from '@/components/Header/Menu/Item';
import { cssIcon, cssMenu, cssIconMobile } from '@/components/Header/Menu/style';

export const cssUl = (): SerializedStyles => css`
  display: flex;

  @media (max-width: 991px) {
    display: none;
  }
`;

export type Type = 'menu' | 'mobile';

interface Items {
  label: string;
  href: string;
}

interface Props {
  items: Items[];
  type?: Type;
  toggle: () => void;
}

const Menu = ({ items, type = 'menu', toggle }: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <header css={ cssMenu }>
      <img
        alt="Menu icon"
        css={ cssIcon }
        src={ IconLogo }
      />
      <nav>
        <ul css={ cssUl }>
          {
            items.map(({ href, label }) => (
              <Item
                key={ uniqueId() }
                href={ href }
                label={ label }
                type={ type }
              />
            ))
          }
        </ul>
      </nav>
      <Button
        color="purple"
        label={ t('BUTTON_START') }
        size="small"
      />
      <div
        css={ cssIconMobile }
        onClick={ toggle }
      >
        <img
          alt="Mobile menu"
          src={ IconMenu }
        />
      </div>
    </header>
  );
};

export default Menu;
