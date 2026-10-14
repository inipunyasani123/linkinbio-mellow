/* Mella — ilustrator & sticker artist (persona fiktif). Satu sumber isi untuk
   halaman tautan, toko sticker, dan komisi. Harga, stok, dan jadwal bazar
   adalah contoh purwarupa desain. */

export const SITE = 'https://linkinbio-mellow.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const PROFIL = { nama: 'Mella', handle: '@mella.draws', kota: 'Malang' };

export const LINKS = [
  { emoji: '🎨', label: 'Toko sticker', sub: 'Lima pack vinyl tahan air', href: '/toko', bg: 'bg-pink-100', rot: '-rotate-2' },
  { emoji: '🧸', label: 'Komisi ilustrasi', sub: 'November: sisa 2 slot', href: '/komisi', bg: 'bg-amber-100', rot: 'rotate-1' },
  { emoji: '🗓️', label: 'Ketemu di bazar', sub: 'Dua bazar di bulan Oktober', href: '/toko#bazar', bg: 'bg-sky-100', rot: '-rotate-1' },
  { emoji: '💌', label: 'Kerja sama brand', sub: 'Sticker pack & ilustrasi kampanye', href: '/komisi#brand', bg: 'bg-violet-100', rot: 'rotate-2' },
];

export const PACK = [
  { id: 'kelinci', emoji: '🐰', nama: 'Kelinci Rebahan', isi: '12 sticker vinyl, matte', harga: 35000, stok: 24 },
  { id: 'kopi', emoji: '☕', nama: 'Teman Ngopi', isi: '10 sticker vinyl, glossy', harga: 30000, stok: 18 },
  { id: 'hujan', emoji: '🌧️', nama: 'Musim Hujan', isi: '12 sticker + 1 kartu pos', harga: 42000, stok: 9 },
  { id: 'kucing', emoji: '🐈', nama: 'Kucing Kantor', isi: '15 sticker vinyl, matte', harga: 45000, stok: 30 },
  { id: 'bunga', emoji: '🌷', nama: 'Kebun Mini', isi: '8 sticker transparan', harga: 28000, stok: 0 },
];
export const ONGKIR = 10000;
export const GRATIS_ONGKIR = 100000;

export const BAZAR = [
  { tanggal: 'Sabtu, 17 Okt 2026', tempat: 'Pasar Kreatif Kayutangan (fiktif), Malang', jam: '10.00–21.00', meja: 'Meja B12' },
  { tanggal: 'Sabtu, 31 Okt 2026', tempat: 'Bazar Buku & Zine Kampus (fiktif), Malang', jam: '09.00–17.00', meja: 'Meja 7' },
];

export const JENIS = [
  { id: 'kepala', nama: 'Kepala (avatar)', harga: 75000, ket: 'Cocok untuk foto profil' },
  { id: 'setengah', nama: 'Setengah badan', harga: 150000, ket: 'Pose dan ekspresi bebas' },
  { id: 'penuh', nama: 'Badan penuh', harga: 250000, ket: 'Termasuk properti kecil' },
];
export const TAMBAHAN = { latar: 40000, karakter: 60000 };

export const SLOT = [['Oktober', 0, 5], ['November', 2, 5], ['Desember', 5, 5]];

export const BRAND = [
  ['Sticker pack custom', 'mulai Rp 1.500.000', '8–12 desain, file siap cetak'],
  ['Ilustrasi kampanye', 'mulai Rp 3.000.000', '3 ilustrasi + versi media sosial'],
  ['Maskot sederhana', 'mulai Rp 4.500.000', 'Karakter + 6 ekspresi'],
];
