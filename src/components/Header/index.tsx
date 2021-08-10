import React, { useState, useEffect } from 'react';

import Menu from '@/components/Header/Menu';
import MobileMenu from '@/components/Header/Menu/Mobile';
import { cssMenuNormal, cssFixedMenu } from '@/components/Header/style';
import { MENU_ITEMS } from '@/constants/items';

const Header = (): JSX.Element => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [fixedMenu, setFixedMenu] = useState<boolean>(false);

  const updateFixedMenu = (): void => setFixedMenu(!!window.scrollY);

  const toggleMobileMenu = (): void => setMobileMenu((mobile) => !mobile);

  useEffect(() => {
    window.addEventListener('scroll', updateFixedMenu);

    return (): void => (
      window.removeEventListener('scroll', updateFixedMenu)
    );
  }, []);

  return (
    <div css={ [cssMenuNormal, fixedMenu && cssFixedMenu] }>
      <Menu
        items={ MENU_ITEMS }
        toggle={ toggleMobileMenu }
      />
      { mobileMenu && (
        <MobileMenu
          items={ MENU_ITEMS }
          toggleExitMenu={ toggleMobileMenu }
        />
      ) }
    </div>
  );
};

export default Header;
