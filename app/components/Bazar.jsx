'use client';

import { bazar } from '@/lib/mella';
import useHariIni from './useHariIni';

// Dua bazar terdekat, dihitung dari hari ini (WIB).
export default function Bazar({ hari: awal }) {
  const hari = useHariIni(awal);
  return (
    <ul className="mt-5 grid gap-4 sm:grid-cols-2">
      {bazar(hari).map((b, i) => (
        <li key={b.tempat} className={`sticker rounded-[1.6rem] bg-sky-100 p-5 ${i ? 'rotate-1' : '-rotate-1'}`}>
          <p className="text-xs font-bold uppercase tracking-wide text-sky-800">{b.tanggal} · {b.jam}</p>
          <p className="mt-1 font-bold text-[#5b4a63]">{b.tempat}</p>
          <p className="text-sm font-medium text-[#6e5a75]">{b.meja}</p>
        </li>
      ))}
    </ul>
  );
}
