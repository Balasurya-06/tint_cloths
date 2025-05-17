import React from "react";
import ProductItem from "./ProductItem";
import { nanoid } from "nanoid";

const ProductGrid = ({ products }: { products?: Product[] }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 max-[400px]:px-3 mt-12">
      {/* Main Grid with 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products &&
          products.map((product: Product) => (
            <div key={nanoid()} className="flex justify-center">
              <div className="w-full max-w-xs bg-[#F1F1F1] rounded-lg shadow-lg overflow-hidden hover:bg-[#E0E0E0] hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <ProductItem
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  popularity={product.popularity}
                  stock={product.stock}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(ProductGrid);
