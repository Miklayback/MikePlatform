export default function Home() {
  const features = [
    {
      title: "Design system first",
      description:
        "Shadcn + Tailwind tokens keep UI consistent while staying flexible for quick experiments.",
    },
    {
      title: "Secure auth lanes",
      description:
        "Clerk handles sessions, orgs, and onboarding while keeping the UI fully brandable.",
    },
    {
      title: "Product signals",
      description:
        "PostHog events and funnels feed real usage data back into roadmap decisions.",
    },
    {
      title: "Revenue ready",
      description:
        "Stripe checkout and billing flows ship with the polish users expect.",
    },
  ];

  const stack = [
    { name: "Next.js 14", detail: "App Router + Route Handlers" },
    { name: "shadcn/ui", detail: "Composable UI primitives" },
    { name: "Clerk", detail: "Auth and org management" },
    { name: "PostHog", detail: "Analytics and feature flags" },
    { name: "Stripe", detail: "Payments + billing" },
    { name: "Supabase", detail: "Database + Storage" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#ff6a00]/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#0c4a6e]/20 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f59e0b]/10 blur-3xl" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              MP
            </div>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-[0.35em] text-[#6b6b6b]">
                Platform
              </p>
              <p className="text-lg font-semibold text-[#121212] font-[var(--font-display)]">
                MikePlatform
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-sm text-[#1a1a1a] sm:flex">
            <a className="transition hover:text-[#ff6a00]" href="#stack">
              Stack
            </a>
            <a className="transition hover:text-[#ff6a00]" href="#features">
              Features
            </a>
            <a className="transition hover:text-[#ff6a00]" href="#launch">
              Launch
            </a>
            <button className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-black/20">
              Join waitlist
            </button>
          </div>
        </header>

        <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-8 animate-[fade-up_0.8s_ease-out]">
            <span className="w-fit rounded-full border border-black/10 bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-[#6b6b6b] shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
              Next.js 14 Starter
            </span>
            <h1 className="text-4xl font-semibold leading-[1.1] text-[#0f0f0f] sm:text-5xl lg:text-6xl font-[var(--font-display)]">
              A crisp launchpad for the MikePlatform experience.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[#4a4a4a]">
              Ship a premium product surface with a clean UI foundation, fast
              auth, analytics, and payments. Start with a refined landing and
              scale into a full platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_14px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5">
                Build the UI
              </button>
              <button className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#111111] transition hover:-translate-y-0.5 hover:border-black/30">
                View roadmap
              </button>
            </div>
            <div className="grid max-w-lg grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-2xl font-semibold text-[#111111]">10+</p>
                <p className="text-[#6b6b6b]">UI blocks</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#111111]">5 min</p>
                <p className="text-[#6b6b6b]">Setup time</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#111111]">0 deps</p>
                <p className="text-[#6b6b6b]">Extra kits</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-[#6b6b6b]">
                  Live preview
                </p>
                <span className="rounded-full bg-[#ff6a00]/10 px-3 py-1 text-xs font-semibold text-[#ff6a00]">
                  UI Sprint
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <div className="h-3 w-24 rounded-full bg-[#111111]" />
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-[#e4ded6]" />
                  <div className="h-2 w-5/6 rounded-full bg-[#e4ded6]" />
                  <div className="h-2 w-4/6 rounded-full bg-[#e4ded6]" />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
                      Active
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#111111]">
                      3 widgets
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-[#111111] p-4 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      Launch
                    </p>
                    <p className="mt-2 text-lg font-semibold">Ready</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b6b6b]">
                What is next
              </p>
              <p className="mt-3 text-lg font-semibold text-[#111111]">
                Start with a clean landing, then wire auth and billing.
              </p>
              <p className="mt-2 text-sm text-[#6b6b6b]">
                Every section is built to transition directly into a product
                dashboard.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">
              Craft
            </p>
            <h2 className="text-3xl font-semibold text-[#101010] sm:text-4xl font-[var(--font-display)]">
              UI foundation that feels premium from day one.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[#4a4a4a]">
              Ship cohesive layout, typography, and motion with a starter page
              that already feels like a product.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#6b6b6b]">
                  {feature.title}
                </p>
                <p className="mt-4 text-base leading-7 text-[#2f2f2f]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="grid gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">
              Stack
            </p>
            <h2 className="text-3xl font-semibold text-[#101010] sm:text-4xl font-[var(--font-display)]">
              Built for the roadmap you outlined.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[#4a4a4a]">
              Next.js Route Handlers keep the API surface close to the UI while
              the supporting services plug in cleanly.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((item) => (
              <div
                key={item.name}
                className="rounded-[26px] border border-black/10 bg-white/80 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.07)]"
              >
                <p className="text-lg font-semibold text-[#111111]">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-[#6b6b6b]">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="launch"
          className="rounded-[36px] border border-black/10 bg-[#111111] px-8 py-12 text-white shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Next step
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl font-[var(--font-display)]">
                Lock the starting UI and move on to auth in sprint two.
              </h2>
              <p className="text-base leading-7 text-white/70">
                This landing page already reflects your chosen stack and sets
                the tone for the dashboard experience ahead.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#111111] transition hover:-translate-y-0.5">
                Schedule build
              </button>
              <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5">
                Share feedback
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
