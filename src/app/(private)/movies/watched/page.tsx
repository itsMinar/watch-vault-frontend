import MovieFilters from '@/components/movies/movie-filters';
import MovieList from '@/components/movies/movie-list';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Watched Movies - WatchVault',
};

export default function WatchedMoviesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="mx-auto px-4 py-6">
      <Suspense>
        <MovieFilters />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <MovieList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
