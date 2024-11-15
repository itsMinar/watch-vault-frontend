import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJjYzU1MWNiN2QzZTMxZjVkNjA1OGUiLCJlbWFpbCI6Im1pbmFyQG1haWwuY29tIiwiaWF0IjoxNzMxNTk5Nzc2LCJleHAiOjE3MzE2ODYxNzZ9.VuGhq4puAPeB3hrrd6Rh7LJsi22ySZ135qskNyWhxdI';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
