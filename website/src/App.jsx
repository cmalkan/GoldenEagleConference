const registrationLinks = [
  { label: 'Register on Eventbrite', href: 'https://www.eventbrite.com/e/golden-eagle-cyber-defense-summit-2026-tickets-000000000000' },
  { label: 'Register on Luma', href: 'https://lu.ma/golden-eagle-cyber-defense-summit-2026' },
];

const sponsorTiers = [
  {
    tier: 'Falcon Tier',
    amount: '$2,500',
    perks: ['Logo placement on summit website', 'Threat analysis round-up mention', '2 conference passes'],
  },
  {
    tier: 'Eagle Tier',
    amount: '$5,000',
    perks: ['Prominent booth placement', 'Custom threat analysis brief for your vertical', '4 conference passes'],
  },
  {
    tier: 'Apex Tier',
    amount: '$10,000',
    perks: ['Opening keynote recognition', 'Executive threat analysis workshop with your team', '8 conference passes + recruiting table'],
  },
];

const topics = [
  { title: 'AI-Powered Threat Hunting', motif: 'Neural Detection Mesh' },
  { title: 'Cloud Incident Response', motif: 'Telemetry Storm Grid' },
  { title: 'Operational Technology Security', motif: 'Industrial Shield Matrix' },
  { title: 'Red Team vs Blue Team Live', motif: 'Adversary Simulation Arena' },
];

function createTopicArt(seedText) {
  const palette = ['#f7b500', '#5eead4', '#60a5fa', '#f472b6', '#a78bfa'];
  const seed = Array.from(seedText).reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return Array.from({ length: 4 }).map((_, idx) => {
    const x = (seed * (idx + 3)) % 220;
    const y = (seed * (idx + 7)) % 90;
    const size = 30 + ((seed + idx * 17) % 42);
    const color = palette[(seed + idx) % palette.length];

    return { x, y, size, color };
  });
}

function App() {
  const agendaText = `Golden Eagle Cyber Defense Summit 2026\n\n8:00 AM - Registration and networking\n9:00 AM - Opening keynote\n10:30 AM - Breakout tracks\n12:00 PM - Sponsor expo lunch\n1:30 PM - Live incident response simulation\n3:30 PM - Threat intel lightning talks\n5:00 PM - Closing remarks`;

  const copyAgenda = async () => {
    await navigator.clipboard.writeText(agendaText);
    alert('Agenda copied to clipboard!');
  };

  return (
    <main className="min-h-screen bg-summit-dark text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-summit-gold uppercase tracking-[0.3em]">Security for the Folks Presents</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Golden Eagle Cyber Defense Summit 2026</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          A one-day practitioner-first conference focused on actionable defense, community-led learning, and resilient cyber operations.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {registrationLinks.map((link) => (
            <a key={link.label} className="rounded-full bg-summit-gold px-5 py-3 font-semibold text-summit-dark" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <button onClick={copyAgenda} className="rounded-full border border-slate-500 px-5 py-3 font-semibold hover:border-summit-gold">
            Copy Agenda
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-10 md:grid-cols-3">
        <article className="rounded-2xl bg-summit-slate p-6">
          <h2 className="text-xl font-bold">Pricing</h2>
          <p className="mt-3">General Admission: $149</p>
          <p className="font-bold text-summit-gold">MU Students (with valid ID): FREE</p>
        </article>
        <article className="rounded-2xl bg-summit-slate p-6 md:col-span-2">
          <h2 className="text-xl font-bold">Sponsor Tiers</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <div key={tier.tier} className="rounded-xl border border-slate-600 p-4">
                <h3 className="font-semibold text-summit-gold">{tier.tier}</h3>
                <p className="text-lg font-bold">{tier.amount}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {tier.perks.map((perk) => <li key={perk}>{perk}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold">Featured Topics</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {topics.map((topic) => {
            const art = createTopicArt(topic.title);
            return (
              <article key={topic.title} className="overflow-hidden rounded-2xl border border-slate-700 bg-summit-slate">
                <svg viewBox="0 0 260 120" className="w-full border-b border-slate-700 bg-[#0d1d2e]">
                  {art.map((shape, idx) => (
                    <rect key={`${topic.title}-${idx}`} x={shape.x} y={shape.y} width={shape.size} height={shape.size / 2} rx="10" fill={shape.color} opacity="0.8" />
                  ))}
                </svg>
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{topic.title}</h3>
                  <p className="mt-2 text-sm text-summit-gold">Motif: {topic.motif}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
