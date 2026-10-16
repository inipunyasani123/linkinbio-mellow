'use client';

import { slotBulan } from '@/lib/mella';
import useHariIni from './useHariIni';

// Slot komisi tiga bulan ke depan; titik merah muda = terisi, lingkaran hijau = kosong.
export default function SlotKomisi({ hari: awal }) {
  const hari = useHariIni(awal);
  return (
    <ul className="grid grid-cols-3 gap-3">
      {slotBulan(hari).map((s) => (
        <li key={s.label} className={`sticker rounded-[1.4rem] p-4 text-center ${s.sisa ? 'bg-emerald-100' : 'bg-white'}`}>
          <p className="text-sm font-bold text-[#5b4a63]">{s.bulan}</p>
          <p className="mt-2 flex justify-center gap-1" aria-hidden="true">
            {Array.from({ length: s.total }, (_, i) => <span key={i} className={`h-3 w-3 rounded-full ${i < s.total - s.sisa ? 'bg-pink-400' : 'border-2 border-emerald-600 bg-white'}`} />)}
          </p>
          <p className="mt-2 text-xs font-bold text-[#6e5a75]">{s.sisa ? `sisa ${s.sisa} slot` : 'penuh'}</p>
        </li>
      ))}
    </ul>
  );
}
