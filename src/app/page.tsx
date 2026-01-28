import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Your Next.js App
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A starting point for your next great idea. Get started by editing{' '}
            <code className="font-mono font-medium text-zinc-950 dark:text-zinc-50">
              src/app/page.tsx
            </code>
            .
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            href="https://nextjs.org/docs"
            className="rounded-md bg-zinc-900 px-4 py-2 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
          >
            Get Started
          </a>
        </div>
      </main>
    </div>
  );
}
