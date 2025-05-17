import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <section className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto mt-20">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center text-gray-900 tracking-tight mb-14">
        Our Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <CategoryItem
          categoryTitle="Special Edition"
          image="luxury category 1.png"
          link="special-edition"
        />
        <CategoryItem
          categoryTitle="Luxury Collection"
          image="luxury category 2.png"
          link="luxury-collection"
        />
        <CategoryItem
          categoryTitle="Summer Edition"
          image="luxury category 3.png"
          link="summer-edition"
        />
        <CategoryItem
          categoryTitle="Unique Collection"
          image="luxury category 4.png"
          link="unique-collection"
        />
      </div>
    </section>
  );
};

export default CategoriesSection;
