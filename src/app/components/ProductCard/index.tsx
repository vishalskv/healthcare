import Image from "next/image";
import { FaCartPlus, FaHeart, FaPlus } from "react-icons/fa";

type Props = {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    tag?: "HOT" | "NEW" | "SALE";
  };
};

const tagColors: Record<string, string> = {
  HOT: "bg-red-500",
  NEW: "bg-yellow-400",
  SALE: "bg-cyan-500",
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="relative cursor-pointer group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 p-4">
      {/* Tag Badge */}
      {product.tag && (
        <span
          className={`absolute top-2 right-2 text-xs text-white px-2 py-1 rounded ${
            tagColors[product.tag] || "bg-gray-500"
          }`}
        >
          {product.tag}
        </span>
      )}

      {/* Product Image */}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg bg-gray-50"
        />

        {/* Hover Icons */}
        <div className="absolute inset-0 flex items-end justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600 transition cursor-pointer">
            <FaPlus size={16} />
          </button>
          <button className="bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600 transition cursor-pointer">
            <FaCartPlus size={16} />
          </button>
          <button className="bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600 transition cursor-pointer">
            <FaHeart size={16} />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 text-center">
        <h3 className="text-md font-semibold">{product.name}</h3>
        <p className="text-blue-700 font-bold mt-1">₹{product.price}</p>
      </div>
    </div>
  );
}
