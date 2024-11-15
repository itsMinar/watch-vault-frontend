import { MovieCard } from '@/components/movies/movie-card';
import { Movie } from '@/types';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJjYzU1MWNiN2QzZTMxZjVkNjA1OGUiLCJlbWFpbCI6Im1pbmFyQG1haWwuY29tIiwiaWF0IjoxNzMxNTk5Nzc2LCJleHAiOjE3MzE2ODYxNzZ9.VuGhq4puAPeB3hrrd6Rh7LJsi22ySZ135qskNyWhxdI';

async function getMovies() {
  const apiUrl = `http://localhost:8000/api/v1/movies/watch-list`;

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

export default async function WatchListPage() {
  const response = await getMovies();

  if (response.data.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No movies found matching your criteria.
      </p>
    );
  }

  return (
    <div className="mx-auto px-4 py-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {response.data.map((movie: Movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
