export const menuItems = [
  {
    id: 1,
    title: 'home',
    to: '',
  },

  {
    id: 2,
    title: 'services',
    to: 'services',
    submenu: [
      {
        id: 3,
        title: 'web design',
        to: 'web design',
      },
      {
        id: 4,
        title: 'web development',
        to: 'web development',
        submenu: [
          {
            id: 5,
            title: 'frontend',
            to: 'frontend',
          },
          {
            id: 6,
            title: 'backend',
            to: 'backend',
            submenu: [
              {
                id: 7,
                title: 'NodeJS',
                to: 'nodeJs',
              },
              {
                id: 8,
                title: 'PHP',
                to: 'php',
              },
            ],
          },
        ],
      },
      {
        id: 9,
        title: 'seo',
        to: 'seo',
      },
    ],
  },
  {
    id: 10,
    title: 'products',
    to: 'products',
    submenu: [
      {
        id: 11,
        title: 'sidebar',
        to: 'sidebar',
        submenu: [
          {
            id: 12,
            title: 'right sidebar',
            to: 'right sidebar',
          },
          {
            id: 13,
            title: 'left sidebar',
            to: 'left sidebar',
          },
          {
            id: 14,
            title: 'no sidebar',
            to: 'no sidbar',
          },
        ],
      },
      {
        id: 15,
        title: 'sticky',
        to: 'sitcky',
      },
      {
        id: 16,
        title: 'bundle product',
        to: 'bundle product',
      },
      {
        id: 17,
        title: 'vertical tab',
        to: 'vertical tab',
      },
    ],
  },

  {
    id: 18,
    title: 'features',
    to: 'features',
    megaMenu: [
      {
        title: 'portfolio',
        to: 'portfolio',
        submenu: [
          {
            title: 'portfolio grid 1',
            to: 'portfolio1',
          },
          {
            title: 'portfolio grid 2',
            to: 'portfolio2',
          },
          {
            title: 'masorny grid 3',
            to: 'portfolio3',
          },
          {
            title: 'masonry grid 4',
            to: 'portfolio4',
          },
          {
            title: 'masonry grid 5',
            to: 'portfolio4',
          },
          {
            title: 'masonry full width',
            to: 'portfolio5',
          },
        ],
      },
      {
        title: 'add to cart',
        to: 'portfolio',
        submenu: [
          {
            title: 'cart modal popup',
            to: 'portfolio1',
          },
          {
            title: 'qty counter',
            to: 'portfolio2',
          },
          {
            title: 'cart top',
            to: 'portfolio3',
          },
          {
            title: 'cart bottom',
            to: 'portfolio4',
          },
          {
            title: 'cart left',
            to: 'portfolio5',
          },
        ],
      },
      {
        title: 'theme element',
        to: 'portfolio',
        submenu: [
          {
            title: 'title portfolio',
            to: 'portfolio1',
          },
          {
            title: 'collection banner',
            to: 'portfolio2',
          },
          {
            title: 'home slider',
            to: 'portfolio3',
          },
          {
            title: 'category',
            to: 'portfolio4',
          },
          {
            title: 'service',
            to: 'portfolio5',
          },
        ],
      },
      {
        title: 'product element',
        submenu: [
          {
            title: 'product slider',
            to: 'portfolio1',
          },
          {
            title: 'product box',
            to: 'portfolio2',
          },
          {
            title: 'no slider',
            to: 'portfolio3',
          },
          {
            title: 'multi slider',
            to: 'portfolio4',
          },
          {
            title: 'tab',
            to: 'portfolio5',
          },
        ],
      },
      {
        title: 'email template',
        submenu: [
          {
            title: 'order success1',
            to: 'portfolio1',
          },
          {
            title: 'order success2',
            to: 'portfolio2',
          },
          {
            title: 'email template1',
            to: 'portfolio3',
          },
          {
            title: 'email template2',
            to: 'portfolio4',
          },
        ],
      },
    ],
  },
  {
    id: 19,
    title: 'shop',
    to: 'shop',
  },
  {
    id: 20,
    title: 'about',
    to: 'about',
  },

  {
    id: 21,
    title: 'contact',
    to: 'contact',
  },
];
