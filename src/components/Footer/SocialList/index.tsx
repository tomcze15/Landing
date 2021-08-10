import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

export const cssSocialList = (): SerializedStyles => css`
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  children?: React.ReactNode;
}

const SocialList = ({ children }: Props): JSX.Element => (
  <ul css={ cssSocialList }>
    { children }
  </ul>
);

export default SocialList;
