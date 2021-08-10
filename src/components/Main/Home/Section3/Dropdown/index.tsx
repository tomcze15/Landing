import { css, SerializedStyles } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { IconLike, IconLightBulb, IconTablet } from '@/assets';
import COLORS from '@/constants/colors';
import SHADOWS from '@/constants/shadows';

const cssDropdown = (): SerializedStyles => css`
  border-radius: 3px;
  box-shadow: 0 16px 32px 0 ${SHADOWS.DEFAULT};
  border: 1px solid ${COLORS.BORDER_DROPDOWN};
`;

const cssDescription = (): SerializedStyles => css`
  font-size: 16px;
  line-height: 1.88;
  padding: 24px;
  margin-bottom: 0;
  border-bottom: 1px solid ${COLORS.BORDER_DROPDOWN};
`;

const cssHead = (): SerializedStyles => css`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid ${COLORS.BORDER_DROPDOWN};
`;

const cssActive = (): SerializedStyles => css`
  color: ${COLORS.ACTIVE_DROPDOWN_ITEM};
`;

const cssTitle = (): SerializedStyles => css`
  font-size: 18px;
  margin-bottom: 0;
  font-weight: bold;
  line-height: 1.5;
`;

const cssImg = (): SerializedStyles => css`
  margin-right: 16px;
  height: 20px;
  width: 20px;
`;

const cssMargin = (): SerializedStyles => css`
  margin-right: 26px;
`;

const Dropdown = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div css={ cssDropdown }>
      <div>
        <div css={ [cssHead, cssActive] }>
          <img
            alt="Like icon"
            css={ cssImg }
            src={ IconLike }
          />
          <div css={ cssTitle }>{ t('DROPDOWN_ITEM_1_TITLE') }</div>
        </div>
        <p css={ cssDescription }>{ t('DROPDOWN_ITEM_1_DESCRIPTION') }</p>
      </div>
      <div>
        <div css={ cssHead }>
          <img
            alt="Bulb icon"
            css={ cssImg }
            src={ IconLightBulb }
          />
          <div css={ cssTitle }>{ t('DROPDOWN_ITEM_2_TITLE') }</div>
        </div>
      </div>
      <div>
        <div css={ cssHead }>
          <img
            alt="Tablet icon"
            css={ cssMargin }
            src={ IconTablet }
          />
          <div css={ cssTitle }>{ t('DROPDOWN_ITEM_3_TITLE') }</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
