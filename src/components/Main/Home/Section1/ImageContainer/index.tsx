import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import { LandingFolderRight, LandingFolder } from '@/assets';

const cssImageContainer = (): SerializedStyles => css`
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const cssSmall = (): SerializedStyles => css`
  display: none;

  @media (min-width: 576px) {
    display: flex;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const cssLarge = (): SerializedStyles => css`
  display: none;
  
  @media (min-width: 768px) {
    display: inline;
    width: 100%;
  }
`;

const ImageContainer = (): JSX.Element => (
  <div css={ cssImageContainer }>
    <img
      alt="One woman"
      css={ cssSmall }
      src={ LandingFolderRight }
    />
    <img
      alt="A man and a woman"
      css={ cssLarge }
      src={ LandingFolder }
    />
  </div>
);

export default ImageContainer;
