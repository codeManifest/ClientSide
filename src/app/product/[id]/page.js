import { notFound } from 'next/navigation';
import jinsData from '@/app/data/jinsData';
import ProductDetails from '../../components/ProductDetails';
// import ProductGallery from '@/components/ProductGallery';
// import ProductActions from '@/components/ProductActions';

export async function generateStaticParams() {
  return jinsData.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductPage = ({ params }) => {
  const { id } = params;

  // Find the specific product using the id from the params
  const product = jinsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return notFound();  // Handles cases where product is not found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* <ProductGallery image={product.image} /> */}
        
        <div>
          <ProductDetails product={product} />
          {/* <ProductActions price={product.price} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
