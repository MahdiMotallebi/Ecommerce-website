export const menuItems = [
  {
    id: 1,
    title: "home",
    to: "/",
  },
  {
    id: 2,
    title: "services",
    to: "services",
    submenu: [
      {
        id: 3,
        title: "web design",
        to: "web design",
      },
      {
        id: 4,
        title: "web development",
        to: "web development",
        submenu: [
          {
            id: 5,
            title: "frontend",
            to: "frontend",
          },
          {
            id: 6,
            title: "backend",
            to: "backend",
            submenu: [
              {
                id: 7,
                title: "NodeJS",
                to: "nodeJs",
              },
              {
                id: 8,
                title: "PHP",
                to: "php",
              },
            ],
          },
        ],
      },
      {
        id: 9,
        title: "seo",
        to: "seo",
      },
    ],
  },
  {
    id: 10,
    title: "products",
    to: "products",
    submenu: [
      {
        id: 11,
        title: "sidebar",
        to: "sidebar",
        submenu: [
          {
            id: 12,
            title: "right sidebar",
            to: "right sidebar",
          },
          {
            id: 13,
            title: "left sidebar",
            to: "left sidebar",
          },
          {
            id: 14,
            title: "no sidebar",
            to: "no sidbar",
          },
        ],
      },
      {
        id: 15,
        title: "sticky",
        to: "sitcky",
      },
      {
        id: 16,
        title: "bundle product",
        to: "bundle product",
      },
      {
        id: 17,
        title: "vertical tab",
        to: "vertical tab",
      },
    ],
  },
  {
    id: 18,
    title: "about",
    to: "/about",
  },
  {
    id: 19,
    title: "gallery",
    to: "/gallery",
  },

  {
    id: 20,
    title: "contact",
    to: "/contact",
  },
];
