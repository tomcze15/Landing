export const MENU_ITEM = {
  HOME: 'HOME',
  PAGES: 'PAGES',
  PORTFOLIO: 'PORTFOLIO',
  SHOP: 'SHOP',
  BLOG: 'BLOG',
  ELEMENTS: 'ELEMENTS'
};

export const QUICKLINKS_ITEM = {
  ABOUT_US: 'About Us',
  FAQ: 'FAQ',
  BLOG: 'Blog',
  CONTACT_US: 'Contact Us'
};

interface ItemProps {
  label: string,
  href: string
}

export const MENU_ITEMS: ItemProps[] = [
  {
    label: MENU_ITEM.HOME,
    href: '/'
  },
  {
    label: MENU_ITEM.BLOG,
    href: '/blog'
  },
  {
    label: MENU_ITEM.ELEMENTS,
    href: '/elements'
  },
  {
    label: MENU_ITEM.PAGES,
    href: '/pages'
  },
  {
    label: MENU_ITEM.PORTFOLIO,
    href: '/portfolio'
  },
  {
    label: MENU_ITEM.SHOP,
    href: '/shop'
  }
];

export const QUICKLINKS_ITEMS: ItemProps[] = [
  {
    label: QUICKLINKS_ITEM.ABOUT_US,
    href: '/'
  },
  {
    label: QUICKLINKS_ITEM.FAQ,
    href: '/'
  },
  {
    label: QUICKLINKS_ITEM.BLOG,
    href: '/'
  },
  {
    label: QUICKLINKS_ITEM.CONTACT_US,
    href: '/'
  }
];
