import { BRAND, JENIS, SITE, rp } from '@/lib/mella';
import Gambar from '../components/Gambar';
import { hariIniWIB } from '@/lib/waktu';
import Kembali from '../components/Kembali';
import FormKomisi from '../components/FormKomisi';
import SlotKomisi from '../components/SlotKomisi';

export const metadata = {
  title: 'Komisi Ilustrasi',
  description: 'Komisi ilustrasi Mella: slot per bulan, harga kepala/setengah badan/badan penuh dengan estimasi langsung, dan kerja sama brand.',
  alternates: { canonical: `${SITE}/komisi` },
};

const CONTOH = {
  kepala: 'wajah berambut keriting dalam lingkaran',
  setengah: 'perempuan berambut bob dan kemeja kuning',
  penuh: 'tokoh mungil melambai bersama kucing',
};

export default function Komisi() {
  const hari = hariIniWIB();
  return (
    <main className="relative min-h-screen px-4 py-10">
      <div className="blob h-64 w-64 bg-amber-100" style={{ top: '10%', right: '-3rem' }} aria-hidden="true" />
      <div className="mx-auto max-w-2xl">
        <Kembali />
        <h1 className="rise mt-8 text-4xl font-bold text-[#5b4a63]">Komisi ilustrasi <span aria-hidden="true">🧸</span></h1>
        <p className="rise mt-2 font-medium text-[#6e5a75]" style={{ animationDelay: '0.06s' }}>Lima slot sebulan supaya setiap gambar sempat dipeluk dulu sebelum dikirim.</p>

        <section aria-labelledby="slot-h" className="mt-8">
          <h2 id="slot-h" className="sr-only">Slot per bulan</h2>
          <SlotKomisi hari={hari} />
        </section>

        <section aria-labelledby="contoh-h" className="mt-10">
          <h2 id="contoh-h" className="text-2xl font-bold text-[#5b4a63]">Contoh hasil <span aria-hidden="true">✏️</span></h2>
          <p className="mt-1 text-sm font-medium text-[#6e5a75]">Tokoh di contoh ini rekaan — komisimu digambar dari foto yang kamu kirim.</p>
          <ul className="mt-5 grid grid-cols-3 gap-3 sm:gap-5">
            {JENIS.map((j, i) => (
              <li key={j.id} className={`text-center ${['-rotate-2', 'rotate-1', '-rotate-1'][i]}`}>
                <Gambar src={`/images/komisi/${j.id}.webp`} alt={`Contoh komisi ${j.nama.toLowerCase()}: ${CONTOH[j.id]}`} width={400} height={400} asli={800} sizes="(min-width: 672px) 200px, 30vw" className="sticker aspect-square w-full rounded-[1.4rem] bg-white object-cover" />
                <p className="mt-2 text-sm font-bold leading-tight text-[#5b4a63]">{j.nama}</p>
                <p className="text-xs font-semibold text-pink-700">{rp(j.harga)}</p>
              </li>
            ))}
          </ul>
        </section>

        <FormKomisi hari={hari} />

        <section id="brand" aria-labelledby="brand-h" className="mt-14 scroll-mt-6">
          <h2 id="brand-h" className="text-2xl font-bold text-[#5b4a63]">Kerja sama brand <span aria-hidden="true">💌</span></h2>
          <ul className="mt-5 space-y-3">
            {BRAND.map(([j, h, d], i) => (
              <li key={j} className={`sticker flex flex-col gap-1 rounded-[1.4rem] bg-violet-100 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 ${i % 2 ? 'rotate-1' : '-rotate-1'}`}>
                <span>
                  <span className="block font-bold text-[#5b4a63]">{j}</span>
                  <span className="text-sm font-medium text-[#6e5a75]">{d}</span>
                </span>
                <span className="shrink-0 font-bold text-violet-800">{h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-[#6e5a75]">Pilih &ldquo;Kerja sama brand&rdquo; di formulir di atas, ceritakan produknya.</p>
        </section>
        <p className="mt-10 text-center text-xs font-semibold text-[#6e5a75]">Harga dan slot adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
