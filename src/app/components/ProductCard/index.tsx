import Image from "next/image";

type Props = {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-blue-700 font-bold mt-2">₹{product.price}</p>
        <button className="mt-3 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
