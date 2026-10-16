import { SITE } from '@/lib/mella';
import { hariIniWIB } from '@/lib/waktu';
import Kembali from '../components/Kembali';
import Keranjang from '../components/Keranjang';
import Bazar from '../components/Bazar';

export const metadata = {
  title: 'Toko Sticker',
  description: 'Lima pack sticker vinyl Mella — kelinci rebahan, teman ngopi, musim hujan, kucing kantor, kebun mini — plus jadwal bazar terdekat di Malang.',
  alternates: { canonical: `${SITE}/toko` },
};

export default function Toko() {
  return (
    <main className="relative min-h-screen px-4 py-10">
      <div className="blob h-72 w-72 bg-pink-200" style={{ top: '-4rem', left: '-4rem' }} aria-hidden="true" />
      <div className="mx-auto max-w-2xl">
        <Kembali />
        <h1 className="rise mt-8 text-4xl font-bold text-[#5b4a63]">Toko sticker <span aria-hidden="true">🎨</span></h1>
        <p className="rise mt-2 font-medium text-[#6e5a75]" style={{ animationDelay: '0.06s' }}>Dicetak di vinyl tahan air, dipotong satu-satu di meja Mella.</p>
        <Keranjang />

        <section id="bazar" aria-labelledby="bazar-h" className="mt-14 scroll-mt-6">
          <h2 id="bazar-h" className="text-2xl font-bold text-[#5b4a63]">Ketemu di bazar <span aria-hidden="true">🗓️</span></h2>
          <p className="mt-1 text-sm font-medium text-[#6e5a75]">Bawa stiker yang sudah dibeli daring — Mella tanda tangani di tempat.</p>
          <Bazar hari={hariIniWIB()} />
        </section>
        <p className="mt-10 text-center text-xs font-semibold text-[#6e5a75]">Harga, stok, dan bazar adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
