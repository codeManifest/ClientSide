const ProductDetails = ({ product }) => {
    return (
      <div className="space-y-4">
        {/* Product Name */}
        <h1 className="text-3xl font-bold">{product.name}</h1>
  
        {/* Product Price */}
        <p className="text-xl font-semibold text-gray-700">${product.price}</p>
  
        {/* Product Description */}
        <p className="text-gray-600">{product.description}</p>
  
        {/* Size Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Select Size</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {product.size.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
  