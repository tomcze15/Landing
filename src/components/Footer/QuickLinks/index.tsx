import { css, SerializedStyles } from '@emotion/react';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

import Item from '@/components/Footer/QuickLinks/Item';

const cssUl = (): SerializedStyles => css`
  list-style-type: none;
`;

interface Items {
  label: string;
  href?: string;
}

interface Props {
  items: Items[];
}

const QuickLinks = ({ items }: Props): JSX.Element => (
  <nav>
    <ul css={ cssUl }>
      {
        items.map((item) => (
          <Item
            key={ uniqueId() }
            href={ item.href }
            label={ item.label }
          />
        ))
      }
    </ul>
  </nav>
);

export default QuickLinks;
