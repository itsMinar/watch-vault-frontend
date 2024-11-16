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

export const languages = [
  'BANGLA',
  'ENGLISH',
  'HINDI',
  'HINDI DUBBED',
  'TAMIL',
  'TELUGU',
  'MALAYALAM',
  'KOREAN',
  'JAPANESE',
  'RUSSIAN',
  'INDONESIAN',
  'CHINESE',
  'OTHERS',
];

export const API_BASE_URL = process.env.API_BASE_URL;
export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJjYzU1MWNiN2QzZTMxZjVkNjA1OGUiLCJlbWFpbCI6Im1pbmFyQG1haWwuY29tIiwiaWF0IjoxNzMxNTk5Nzc2LCJleHAiOjE3MzE2ODYxNzZ9.VuGhq4puAPeB3hrrd6Rh7LJsi22ySZ135qskNyWhxdI';
