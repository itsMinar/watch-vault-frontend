import { Analytics } from '@/components/analytics';
import { API_BASE_URL, token } from '@/data';
import { AnalyticsResponse } from '@/types';
import type { Metadata } from 'next';

async function getAnalyticsData() {
  const apiUrl = `${API_BASE_URL}/movies/analytics`;

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
  title: 'Analytics - WatchVault',
};

export default async function AnalyticsPage() {
  const data: AnalyticsResponse = await getAnalyticsData();

  return <Analytics data={data.data} />;
}
