'use server';

import { axiosInstance } from '@/lib/axios';
import { MovieFormData, MovieSchema } from '@/schemas/movie';
import { revalidatePath } from 'next/cache';

export async function addWatchedMovie(formData: MovieFormData) {
  try {
    const result = MovieSchema.safeParse(formData);

    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors };
    }

    const movie = { ...result.data, isWatched: true };

    const { status } = await axiosInstance.post('/movies', movie);

    if (status !== 201) {
      return { success: false, message: 'Failed to add movie!' };
    }

    revalidatePath('/movies/watched');

    return { success: true, message: 'Watched Movie added successfully!' };
  } catch (error) {
    console.error('🚀 ~ addWatchedMovie ~ error:', error);
    return { success: false, message: 'Something went wrong!' };
  }
}
