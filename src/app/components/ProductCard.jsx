const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4 bg-slate-400  mb-3">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 text-gray-900">
          {product.title}
        </div>
        <p className="text-gray-700 text-base">${product.price}</p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          //   onClick={(e) => {
          //     e.stopPropagation();
          //     dispatch(addToCart(product));
          //   }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
