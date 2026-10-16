'use client';

import { useState } from 'react';
import { JENIS, TAMBAHAN, rp, slotBulan } from '@/lib/mella';
import useHariIni from './useHariIni';

export default function FormKomisi({ hari: awal }) {
  const hari = useHariIni(awal);
  const [jenis, setJenis] = useState('setengah');
  const [latar, setLatar] = useState(false);
  const [karakter, setKarakter] = useState(1);
  const [selesai, setSelesai] = useState(false);
  const j = JENIS.find((x) => x.id === jenis);
  const total = j ? j.harga + (latar ? TAMBAHAN.latar : 0) + (karakter - 1) * TAMBAHAN.karakter : 0;
  const bulan = slotBulan(hari).filter((s) => s.sisa).map((s) => s.label);
  const input = 'w-full rounded-2xl border-2 border-[#a07592] bg-white/80 px-4 py-3 font-medium text-[#5b4a63] focus:border-pink-400';

  return (
    <section aria-labelledby="pesan-h" className="sticker mt-10 rounded-[1.8rem] bg-amber-100 p-6">
      <h2 id="pesan-h" className="text-2xl font-bold text-[#5b4a63]">Pesan komisi</h2>
      {selesai ? (
        <div role="status" className="mt-4">
          <p className="font-bold text-[#5b4a63]">Tercatat! Mella akan membalas dalam 3 hari 🌷</p>
          <p className="mt-1 text-sm font-medium text-[#6e5a75]">Ini purwarupa desain: tidak ada pesan yang benar-benar dikirim.</p>
          <button type="button" onClick={() => setSelesai(false)} className="mt-4 min-h-11 rounded-full bg-white px-5 py-2 text-sm font-bold text-[#5b4a63]">Pesan lagi</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-5 space-y-5">
          <fieldset>
            <legend className="mb-2 text-sm font-bold text-[#5b4a63]">Jenis</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {[...JENIS, { id: 'brand', nama: 'Kerja sama brand', ket: 'Harga setelah ngobrol' }].map((x) => (
                <label key={x.id} className={`cursor-pointer rounded-2xl border-2 p-3 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-pink-600 ${jenis === x.id ? 'border-pink-400 bg-white' : 'border-white bg-white/60'}`}>
                  <input type="radio" name="jenis" value={x.id} checked={jenis === x.id} onChange={() => setJenis(x.id)} className="sr-only" />
                  <span className="block font-bold text-[#5b4a63]">{x.nama}</span>
                  <span className="block text-xs font-medium text-[#6e5a75]">{x.harga ? rp(x.harga) : x.ket}</span>
                </label>
              ))}
            </div>
          </fieldset>
          {j && (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl bg-white/70 p-3 font-medium text-[#5b4a63]">
                <input type="checkbox" checked={latar} onChange={(e) => setLatar(e.target.checked)} className="h-5 w-5 accent-pink-500" />
                Pakai latar (+{rp(TAMBAHAN.latar)})
              </label>
              <div>
                <label htmlFor="k-karakter" className="mb-1 block text-sm font-bold text-[#5b4a63]">Jumlah karakter</label>
                <select id="k-karakter" value={karakter} onChange={(e) => setKarakter(Number(e.target.value))} className={input}>
                  {[1, 2, 3].map((n) => <option key={n} value={n}>{n}{n > 1 ? ` (+${rp((n - 1) * TAMBAHAN.karakter)})` : ''}</option>)}
                </select>
              </div>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="k-nama" className="mb-1 block text-sm font-bold text-[#5b4a63]">Nama</label>
              <input id="k-nama" required autoComplete="name" className={input} />
            </div>
            <div>
              <label htmlFor="k-bulan" className="mb-1 block text-sm font-bold text-[#5b4a63]">Bulan</label>
              <select id="k-bulan" className={input}>{bulan.map((b) => <option key={b}>{b}</option>)}</select>
            </div>
          </div>
          <div>
            <label htmlFor="k-cerita" className="mb-1 block text-sm font-bold text-[#5b4a63]">Ceritakan karakternya</label>
            <textarea id="k-cerita" required rows={3} className={input} />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4">
            <span className="font-bold text-[#5b4a63]">Perkiraan</span>
            <span className="text-2xl font-bold text-pink-700" aria-live="polite">{j ? rp(total) : 'setelah ngobrol'}</span>
          </div>
          <button type="submit" className="w-full rounded-full bg-pink-600 py-3 font-bold text-white hover:bg-pink-700">Kirim pesanan</button>
          <p className="text-xs font-semibold text-[#6e5a75]">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
        </form>
      )}
    </section>
  );
}
