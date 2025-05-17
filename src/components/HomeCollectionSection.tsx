import ProductGrid from "./ProductGrid";
import ProductGridWrapper from "./ProductGridWrapper";

const HomeCollectionSection = () => {
  return (
    <div>
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto mt-24 px-5 max-[400px]:px-3">
       <h2 className="text-white text-5xl font-semibold tracking-[1.56px] max-sm:text-4xl text-center relative">
  <span className="relative z-10">Our Collection</span>
</h2>


      </div>
      <ProductGridWrapper limit={6}>
        <ProductGrid />
      </ProductGridWrapper>
    </div>
  );
};
export default HomeCollectionSection;
