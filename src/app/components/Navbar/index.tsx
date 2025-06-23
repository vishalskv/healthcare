"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const res = await fetch("http://localhost:3002/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 499 }), // ₹499
    });

    const data = await res.json();
    interface RazorpayResponse {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: data.amount,
      currency: data.currency,
      name: "Healthcare Store",
      description: "Medical Product Purchase",
      order_id: data.id,
      handler: (response: RazorpayResponse) => {
        alert("Payment Successful!");
        console.log(response); // you can send this to backend for verification
      },
      prefill: {
        name: "Vishal Kumar",
        email: "vishal@example.com",
      },
      theme: {
        color: "#0ea5e9", // Tailwind cyan-500
      },
    };
    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

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
          <button
            onClick={handlePayment}
            className="bg-cyan-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-cyan-700 transition"
          >
            Pay Now
          </button>
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
