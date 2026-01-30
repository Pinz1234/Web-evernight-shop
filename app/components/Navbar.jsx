"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 glass">
      <ul className="flex justify-center gap-6 py-4 text-sm">
        <li><a href="#panel">List Panel</a></li>
        <li><a href="#script">Script Bot</a></li>
        <li><a href="#sewa">Sewa Bot</a></li>
        <li><a href="#komunitas">Grup & Komunitas</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </nav>
  );
}