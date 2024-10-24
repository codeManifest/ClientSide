import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
