'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { languages } from '@/data';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AddMovieButton } from './add-movie';

export default function MovieFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [releaseYear, setReleaseYear] = useState(
    searchParams.get('releaseYear') || ''
  );
  const [language, setLanguage] = useState(searchParams.get('language') || '');

  useEffect(() => {
    const params = new URLSearchParams();

    if (search) params.set('search', search);
    if (releaseYear) params.set('releaseYear', releaseYear);
    if (language) params.set('language', language);

    router.push(`/movies/watched?${params.toString()}`);
  }, [search, releaseYear, language, router]);

  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <Input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-64"
      />

      <Select value={releaseYear} onValueChange={setReleaseYear}>
        <SelectTrigger className="w-full sm:w-40">
          <SelectValue placeholder="Release Year" />
        </SelectTrigger>
        <SelectContent>
          {[...Array(100)].map((_, i) => (
            <SelectItem key={i} value={(2023 - i).toString()}>
              {2023 - i}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-full sm:w-40">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        onClick={() => {
          setSearch('');
          setReleaseYear('');
          setLanguage('');
        }}
        variant="outline"
      >
        Clear Filters
      </Button>

      <AddMovieButton />
    </div>
  );
}
