export const navLinks = [
  {
    title: 'Dashboard',
    url: '#',
    items: [
      {
        title: 'Analytics',
        isActive: false,
        url: '/analytics',
      },
    ],
  },
  {
    title: 'Movies',
    url: '#',
    items: [
      {
        title: 'Watched',
        url: '/movies/watched',
        isActive: false,
      },
      {
        title: 'Watch List',
        url: '/movies/watch-list',
        isActive: true,
      },
    ],
  },
];
