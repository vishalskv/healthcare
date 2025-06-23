import Hero from "@/app/components/Hero";
import ProductCard from "@/app/components/ProductCard";
import Navbar from "@/app/components/Navbar";
import Banner from "@/app/components/Banner";
import OfferCountdown from "./components/Countdown";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Hero />
      <OfferCountdown />
      <section className="px-20 py-10 w-full max-w-8xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
          Top Healthcare Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
