import { Button } from '@/components/ui/button';
import { Film } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="/">
          <Film className="mr-2 h-6 w-6" />
          <span className="font-bold">WatchVault</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/register"
          >
            <Button className="px-7">Join Now</Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Track Your Movie Journey
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Keep track of the movies you&apos;ve watched and the ones
                    you want to see. Your personal movie diary starts here.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button size="lg">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-2xl"></div>
                  <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950">
                    <Film className="h-24 w-24 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MovieVault. All rights reserved.
        </p>
        <nav className="flex items-center gap-2 sm:ml-auto sm:gap-2">
          <span className="text-xs">Developed by -</span>
          <a
            className="underline-offset-4 hover:underline"
            href="https://github.com/itsMinar"
            target="_blank"
          >
            Md. Minar Munshi
          </a>
        </nav>
      </footer>
    </div>
  );
}
