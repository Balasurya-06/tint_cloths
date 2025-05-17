import { Link } from "react-router-dom";

const CategoryItem = ({
  categoryTitle,
  image,
  link,
}: {
  categoryTitle: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-md group transition-all duration-300">
      <Link to={`/shop/${link}`} className="block w-full h-full">
        <img
          src={`/src/assets/${image}`}
          alt={categoryTitle}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-3 rounded-md shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-black text-center tracking-wide">
            {categoryTitle}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
