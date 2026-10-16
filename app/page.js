import Link from 'next/link';
import { ArrowUpRight, Heart } from 'lucide-react';
import { LINKS, PROFIL } from '@/lib/mella';

const STIKER = [
  { e: '🌷', c: 'h-24 w-24 bg-pink-100 text-5xl', s: { top: '12%', left: '9%', rotate: '-10deg' } },
  { e: '☁️', c: 'h-20 w-28 bg-sky-100 text-5xl', s: { top: '20%', right: '9%', rotate: '7deg' } },
  { e: '🍓', c: 'h-20 w-20 bg-white text-4xl', s: { top: '50%', left: '15%', rotate: '9deg' } },
  { e: '⭐', c: 'h-16 w-16 bg-amber-100 text-3xl', s: { bottom: '16%', left: '8%', rotate: '-6deg' } },
  { e: '🐈', c: 'h-24 w-24 bg-violet-100 text-5xl', s: { bottom: '14%', right: '11%', rotate: '-8deg' } },
  { e: '✏️', c: 'h-16 w-16 bg-emerald-100 text-3xl', s: { top: '52%', right: '17%', rotate: '12deg' } },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-14">
      {/* Awan pastel */}
      <div className="blob h-72 w-72 bg-pink-200" style={{ top: '-4rem', left: '-4rem', animation: 'drift 14s ease-in-out infinite' }} aria-hidden="true" />
      <div className="blob h-64 w-64 bg-sky-200" style={{ bottom: '-3rem', right: '-3rem', animation: 'drift 18s ease-in-out infinite reverse' }} aria-hidden="true" />
      <div className="blob h-52 w-52 bg-amber-100" style={{ top: '30%', right: '-2rem', animation: 'drift 16s ease-in-out infinite' }} aria-hidden="true" />

      {/* Papan stiker: hiasan di tepi layar lebar */}
      <div className="pointer-events-none hidden lg:block" aria-hidden="true">
        {STIKER.map((t) => (
          <span key={t.e} className={`sticker absolute grid place-items-center rounded-[1.6rem] ${t.c}`} style={t.s}>{t.e}</span>
        ))}
      </div>

      <div className="w-full max-w-md text-center">
        <div className="rise" aria-hidden="true">
          <div className="sticker bob mx-auto grid h-28 w-28 place-items-center rounded-[2rem] bg-white text-6xl">🐰</div>
        </div>

        <div className="rise mt-6" style={{ animationDelay: '0.08s' }}>
          <span className="sticker inline-block -rotate-2 rounded-full bg-white px-4 py-1 text-xs font-bold text-pink-700">✿ ilustrator &amp; sticker artist</span>
          <h1 className="mt-3 text-4xl font-bold text-[#5b4a63]">
            Halo, aku <span className="text-pink-600">Mella!</span>
          </h1>
          <p className="mt-2 text-sm font-medium text-[#6e5a75]">Menggambar hal-hal kecil yang bikin harimu lebih lembut 🌷</p>
        </div>

        <nav className="mt-8 space-y-4" aria-label="Tautan utama">
          {LINKS.map((s, i) => (
            <Link
              key={s.label}
              href={s.href}
              className={`rise sticker sticker-hover flex items-center gap-4 rounded-[1.6rem] ${s.bg} ${s.rot} p-4 text-left`}
              style={{ animationDelay: `${0.16 + i * 0.08}s` }}
            >
              <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-2xl shadow-sm">{s.emoji}</span>
              <span className="flex-1">
                <span className="block font-bold text-[#5b4a63]">{s.label}</span>
                <span className="block text-xs font-medium text-[#6e5a75]">{s.sub}</span>
              </span>
              <ArrowUpRight size={18} className="text-[#8a7691]" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <p className="rise mt-8 text-sm font-semibold text-[#6e5a75]" style={{ animationDelay: '0.55s' }}>Karya harian di Instagram {PROFIL.handle}</p>
        <p className="rise mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#6e5a75]" style={{ animationDelay: '0.65s' }}>
          dibuat dengan <Heart size={12} className="fill-pink-500 text-pink-500" aria-hidden="true" /><span className="sr-only">cinta</span> · persona fiktif untuk purwarupa desain
        </p>
      </div>
    </main>
  );
}
