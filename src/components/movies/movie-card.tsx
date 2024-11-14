/* eslint-disable @next/next/no-img-element */
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Movie } from '@/types';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="overflow-hidden">
      <img
        src={movie.poster}
        alt={movie.title}
        className="aspect-[3/3] w-full object-cover"
      />
      <CardHeader className="p-2">
        <CardTitle className="text-sm">{movie.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <p className="text-muted-foreground text-sm">{movie.releaseYear}</p>
        <p className="text-muted-foreground text-sm">{movie.language}</p>
      </CardContent>
    </Card>
  );
}
