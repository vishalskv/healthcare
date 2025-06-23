import Hero from "@/app/components/Hero";
import ProductCard from "@/app/components/ProductCard";
import Navbar from "@/app/components/Navbar";
import Banner from "@/app/components/Banner";
import { products } from "@/app/data/products";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Hero />
      <section className="px-4 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Top Healthcare Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
