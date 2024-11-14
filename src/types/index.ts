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
