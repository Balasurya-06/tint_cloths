import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/formatCategoryName";

const ProductItem = ({
  id,
  image,
  title,
  category,
  price,
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
}) => {
  return (
    <div className="w-full sm:w-[300px] md:w-[400px] flex flex-col gap-4 justify-center items-center max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <Link
        to={`/product/${id}`}
        className="w-full h-[300px] sm:h-[200px] overflow-hidden bg-gray-200 rounded-lg group"
      >
        <img
          src={`/src/assets/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Product Title */}
      <Link
        to={`/product/${id}`}
        className="text-black text-center text-2xl font-semibold tracking-tight transition-colors duration-200 hover:text-secondaryBrown sm:text-xl"
      >
        <h2>{title}</h2>
      </Link>

      {/* Product Category */}
      <p className="text-gray-600 text-lg tracking-wide text-center sm:text-base">
        {formatCategoryName(category)}
      </p>

      {/* Product Price */}
      <p className="text-black text-2xl font-bold text-center sm:text-xl">
        ${price}
      </p>

      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-2 mt-4">
        <Link
          to={`/product/${id}`}
          className="text-white bg-secondaryBrown text-center text-xl font-semibold py-3 rounded-md tracking-[0.6px] transition-all duration-200 hover:bg-secondaryBrown/80 focus:outline-none"
        >
          View Product
        </Link>
        <Link
          to={`/product/${id}`}
          className="bg-white text-black text-center text-xl font-semibold py-3 rounded-md border border-gray-300 tracking-[0.6px] transition-all duration-200 hover:bg-gray-100 focus:outline-none"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
