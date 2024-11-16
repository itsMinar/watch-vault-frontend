import { API_BASE_URL, token } from '@/data';
import { SuccessResponse } from '@/types';
import { MovieCard } from './movie-card';

async function getMovies(params: URLSearchParams) {
  const apiUrl = `${API_BASE_URL}/movies/watched?${params.toString()}`;

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
      <p className="text-center text-muted-foreground">
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
