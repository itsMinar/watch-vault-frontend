import { MovieCard } from '@/components/movies/movie-card';
import { API_BASE_URL, token } from '@/data';
import { Movie } from '@/types';
import type { Metadata } from 'next';

async function getMovies() {
  const apiUrl = `${API_BASE_URL}/movies/watch-list`;

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

export const metadata: Metadata = {
  title: 'Watch List - WatchVault',
};

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
