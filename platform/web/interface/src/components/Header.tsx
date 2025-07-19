import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#F3F4F6] border-b border-[#e7edf4] px-10 py-3">
      <div className="flex items-center gap-4">
        {/* Logo Icon */}
        <img src="/assets/Asset4.svg" alt="Cphorm Logo" className="h-8 w-8 rounded-full" />
      </div>
      <nav className="flex items-center gap-4">
        <a href="/" className="font-medium text-[#111827] hover:text-[#2563EB] px-3 py-1 rounded transition">Home</a>
        <a href="/solutions" className="font-medium text-[#111827] hover:text-[#2563EB] px-3 py-1 rounded transition">Solutions</a>
        <a href="/contact" className="border border-[#2563EB] text-[#2563EB] px-4 py-1 rounded-full font-medium hover:bg-[#2563EB] hover:text-white transition">Contact us</a>
        <a href="/explore" className="bg-[#2563EB] text-white px-4 py-1 rounded-full font-medium hover:bg-[#174ea6] transition">Explore Data</a>
      </nav>
    </header>
  );
}
