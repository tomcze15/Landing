import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Item = ({ children }: Props): JSX.Element => (
  <div>
    { children }
  </div>
);

export default Item;
