import { SuccessResponse } from '@/types';
import { MovieCard } from './movie-card';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJjYzU1MWNiN2QzZTMxZjVkNjA1OGUiLCJlbWFpbCI6Im1pbmFyQG1haWwuY29tIiwiaWF0IjoxNzMxNTk5Nzc2LCJleHAiOjE3MzE2ODYxNzZ9.VuGhq4puAPeB3hrrd6Rh7LJsi22ySZ135qskNyWhxdI';

async function getMovies(params: URLSearchParams) {
  const apiUrl = `http://localhost:8000/api/v1/movies/watched?${params.toString()}`;

  const res = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  return res.json();
}

export default async function MovieList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = new URLSearchParams();
  if (searchParams.search) params.set('search', searchParams.search.toString());
  if (searchParams.releaseYear)
    params.set('releaseYear', searchParams.releaseYear.toString());
  if (searchParams.language)
    params.set('language', searchParams.language.toString());
  if (searchParams.genre) params.set('genre', searchParams.genre.toString());

  const response: SuccessResponse = await getMovies(params);

  if (response.data.movies.length === 0) {
    return (
      <p className="text-muted-foreground text-center">
        No movies found matching your criteria.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {response.data.movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
}
