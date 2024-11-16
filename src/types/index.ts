export interface ErrorResponse {
  message: string;
  errors: string[];
  hints: string;
}

export interface SuccessResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: ResponseData;
}

export interface ResponseData {
  movies: Movie[];
  pagination: Pagination;
}

export interface Movie {
  _id: string;
  title: string;
  releaseYear: number;
  language: string;
  poster: string;
  country: string;
  isWatched: boolean;
  author: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalMovies: number;
  limit: number;
}

// =====================================
export interface AnalyticsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: AnalyticsData;
}

export interface AnalyticsData {
  user: User;
  totalWatchedMovies: number;
  totalWatchlistMovies: number;
  topLanguage: string;
  mostWatchedYear: number;
  moviesByLanguage: MoviesByLanguage[];
  moviesByYear: MoviesByYear[];
}

export interface MoviesByLanguage {
  _id: string;
  count: number;
}

export interface MoviesByYear {
  _id: number;
  count: number;
}

export interface User {
  name: string;
  email: string;
}
