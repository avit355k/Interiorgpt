import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/*right side*/}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* SOFT LEFT FADE */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-transparent" />

      </div>

      {/* CONTENT */}
      <section className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="max-w-2xl">

            {/* TITLE */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Your space,
              <br />
              <span className="font-light italic text-muted-foreground">
                reimagined.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
              InteriorGPT uses advanced spatial AI to redesign rooms,
              stage empty spaces, and build moodboards in seconds.
              Built for designers, realtors, and homeowners worldwide.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* PRIMARY */}
              <Link href="/dashboard">
                <button className="rounded-2xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                  Go to dashboard →
                </button>
              </Link>

              {/* SECONDARY */}
              <Link href="/pricing">
                <button className="rounded-2xl border border-border bg-background/10 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition hover:bg-background/20">
                  See pricing
                </button>
              </Link>

            </div>

            {/* STATS */}
            <div className="mt-16 flex flex-wrap gap-10 md:gap-16">

              <div>
                <h2 className="text-4xl font-bold">3M+</h2>
                <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                  Designers
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">50M+</h2>
                <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                  Designs Created
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">4.9/5</h2>
                <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                  User Rating
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
