import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="my-4 flex flex-col items-center gap-4">
      <Link href="/login">
        <Button>Login</Button>
      </Link>
      <Link href="/register">
        <Button>Register</Button>
      </Link>
      <Link href="/movies/watched">
        <Button>Watched Movies</Button>
      </Link>
    </div>
  );
}
