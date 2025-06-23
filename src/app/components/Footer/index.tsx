"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Socials */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            {/* <Image src="/logo.png" alt="Logo" width={40} height={40} /> */}
            <Link href="/" className="text-2xl font-bold text-[#00bcd1]">
              MediCart
            </Link>
            {/* <h2 className="text-2xl font-bold text-cyan-400">SEPTOSHA</h2> */}
          </div>
          <p className="text-gray-400 text-sm">Medical, Health and Care</p>
          <div className="flex gap-3 justify-center md:justify-start mt-4">
            <FaFacebookF
              className="hover:text-cyan-400 cursor-pointer"
              size={20}
            />
            <FaTwitter
              className="hover:text-cyan-400 cursor-pointer"
              size={20}
            />
            <FaInstagram
              className="hover:text-cyan-400 cursor-pointer"
              size={20}
            />
            <FaLinkedinIn
              className="hover:text-cyan-400 cursor-pointer"
              size={20}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">CONTACT US</h3>
          <p className="text-gray-400 text-sm mb-2">
            📍 74 Guild Street 542B, Town MT.
          </p>
          <p className="text-gray-400 text-sm mb-2">📞 (+44) 123 456 789</p>
          <p className="text-gray-400 text-sm">📧 addyour@emailhere</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">NEWSLETTER</h3>
          <p className="text-gray-400 text-sm mb-4">
            Enter your e-mail to get the latest news.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Subscribe with us"
              className="bg-white w-full rounded-md px-4 py-3 text-sm text-black focus:outline-none"
            />
            <button className="absolute right-2 top-2.5 bg-transparent text-cyan-500 hover:text-cyan-700">
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} Septosha is Powered by{" "}
          <span className="text-cyan-400">Chitrakoot Web</span>
        </p>
        <div className="flex gap-3 justify-center">
          <Image src="/assets/visa.png" alt="Visa" width={40} height={20} />
          <Image
            src="/assets/mastercard.png"
            alt="MasterCard"
            width={40}
            height={20}
          />
          <Image src="/assets/paypal.png" alt="PayPal" width={40} height={20} />
          <Image src="/assets/american.png" alt="Amex" width={40} height={20} />
        </div>
      </div>
    </footer>
  );
}
