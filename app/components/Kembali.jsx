import Link from 'next/link';

export default function Kembali() {
  return (
    <Link href="/" className="sticker sticker-hover inline-flex min-h-11 -rotate-1 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5b4a63]">
      <span aria-hidden="true">🐰</span> ← semua tautan Mella
    </Link>
  );
}
