"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          MediCart
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingBagIcon className="h-6 w-6 text-blue-700" />
            {/* Add cart count badge here later */}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-blue-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700">
            Home
          </Link>
          <Link href="/products" className="block text-gray-700">
            Products
          </Link>
          <Link href="/about" className="block text-gray-700">
            About
          </Link>
          <Link href="/contact" className="block text-gray-700">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
