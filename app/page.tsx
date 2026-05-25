export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <main className="flex max-w-lg flex-col items-center gap-6 text-center">
        <p className="font-mono text-sm tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
          Software Engineering
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Savannah&apos;s Portfolio
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Coming soon — projects, experience, and more on the way.
        </p>
        <div
          className="mt-2 h-1 w-12 rounded-full bg-zinc-300 dark:bg-zinc-600"
          aria-hidden
        />
      </main>
    </div>
  );
}
