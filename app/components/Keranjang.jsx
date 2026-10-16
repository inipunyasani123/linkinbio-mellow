'use client';

import { useState } from 'react';
import { GRATIS_ONGKIR, ONGKIR, PACK, rp } from '@/lib/mella';

const WARNA = ['bg-pink-100', 'bg-amber-100', 'bg-sky-100', 'bg-emerald-100', 'bg-violet-100'];

export default function Keranjang() {
  const [jml, setJml] = useState({});
  const [selesai, setSelesai] = useState(false);
  const ubah = (id, d, stok) => setJml((j) => ({ ...j, [id]: Math.max(0, Math.min(stok, (j[id] || 0) + d)) }));
  const isi = PACK.filter((p) => jml[p.id]);
  const subtotal = isi.reduce((s, p) => s + p.harga * jml[p.id], 0);
  const ongkir = subtotal && subtotal < GRATIS_ONGKIR ? ONGKIR : 0;
  const tombol = 'grid h-11 w-11 place-items-center rounded-full bg-white text-xl font-bold text-[#5b4a63] shadow-sm disabled:opacity-40';

  return (
    <>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {PACK.map((p, i) => (
          <li key={p.id} className={`sticker rounded-[1.6rem] p-5 ${WARNA[i % WARNA.length]} ${i % 2 ? 'rotate-1' : '-rotate-1'}`}>
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-3xl shadow-sm">{p.emoji}</span>
              <div className="flex-1">
                <h2 className="font-bold text-[#5b4a63]">{p.nama}</h2>
                <p className="text-xs font-medium text-[#6e5a75]">{p.isi}</p>
                <p className="mt-1 font-bold text-pink-700">{rp(p.harga)}</p>
              </div>
            </div>
            {p.stok ? (
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6e5a75]">stok {p.stok}</span>
                <div className="flex items-center gap-2" role="group" aria-label={`Jumlah ${p.nama}`}>
                  <button type="button" onClick={() => ubah(p.id, -1, p.stok)} disabled={!jml[p.id]} className={tombol} aria-label={`Kurangi ${p.nama}`}>−</button>
                  <span className="w-6 text-center font-bold text-[#5b4a63]" aria-live="polite">{jml[p.id] || 0}</span>
                  <button type="button" onClick={() => ubah(p.id, 1, p.stok)} disabled={(jml[p.id] || 0) >= p.stok} className={tombol} aria-label={`Tambah ${p.nama}`}>+</button>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-xs font-bold text-[#6e5a75]">Habis — dicetak ulang bulan depan</p>
            )}
          </li>
        ))}
      </ul>

      <div className="sticker mt-8 rounded-[1.6rem] bg-white p-6">
        <h2 className="text-xl font-bold text-[#5b4a63]">Keranjang <span aria-hidden="true">🧺</span></h2>
        {selesai ? (
          <div role="status" className="mt-3">
            <p className="font-bold text-[#5b4a63]">Pesanan tercatat — terima kasih! 💌</p>
            <p className="mt-1 text-sm font-medium text-[#6e5a75]">Ini purwarupa desain: tidak ada pembayaran atau pengiriman sungguhan.</p>
            <button type="button" onClick={() => { setSelesai(false); setJml({}); }} className="mt-4 min-h-11 rounded-full bg-pink-100 px-5 py-2 text-sm font-bold text-[#5b4a63]">Belanja lagi</button>
          </div>
        ) : isi.length ? (
          <>
            <ul className="mt-3 space-y-1.5 text-sm font-medium text-[#5b4a63]">
              {isi.map((p) => <li key={p.id} className="flex justify-between"><span>{jml[p.id]} × {p.nama}</span><span>{rp(p.harga * jml[p.id])}</span></li>)}
              <li className="flex justify-between text-[#6e5a75]"><span>Ongkir</span><span>{ongkir ? rp(ongkir) : 'gratis'}</span></li>
            </ul>
            <p className="mt-3 flex justify-between border-t-2 border-dashed border-pink-200 pt-3 text-lg font-bold text-[#5b4a63]"><span>Total</span><span>{rp(subtotal + ongkir)}</span></p>
            {ongkir > 0 && <p className="mt-1 text-xs font-semibold text-[#6e5a75]">Tambah {rp(GRATIS_ONGKIR - subtotal)} lagi untuk gratis ongkir.</p>}
            <button type="button" onClick={() => setSelesai(true)} className="mt-4 w-full rounded-full bg-pink-600 py-3 font-bold text-white hover:bg-pink-700">Pesan sekarang</button>
          </>
        ) : (
          <p className="mt-2 text-sm font-medium text-[#6e5a75]">Masih kosong. Tekan + pada pack yang kamu suka.</p>
        )}
      </div>
    </>
  );
}
