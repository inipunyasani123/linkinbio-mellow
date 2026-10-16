import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="sticker w-full max-w-sm -rotate-1 rounded-[2rem] bg-white p-8 text-center">
        <p className="text-6xl" aria-hidden="true">🐰💤</p>
        <h1 className="mt-4 text-2xl font-bold text-[#5b4a63]">Halamannya lagi tidur</h1>
        <p className="mt-2 font-medium text-[#6e5a75]">Atau mungkin memang belum digambar. Coba kembali ke semua tautan.</p>
        <Link href="/" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-pink-600 px-5 py-2.5 font-bold text-white hover:bg-pink-700">Ke semua tautan</Link>
      </div>
    </main>
  );
}
