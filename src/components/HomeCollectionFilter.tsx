import { useState } from "react";

const categories = ["All", "Tops", "Dresses", "Shorts", "Jeans"];

const HomeCollectionFilter = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="max-w-screen-2xl mx-auto mt-24 px-5 max-lg:flex-col max-lg:gap-y-5 max-[400px]:px-3">
      <ul className="flex flex-wrap gap-6 justify-center items-center text-black text-xl tracking-wide max-sm:text-lg max-[450px]:text-base">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setActive(category)}
            className={`cursor-pointer transition-all duration-200 relative px-2 py-1
              ${active === category ? "font-semibold text-black" : "text-secondaryBrown hover:text-black"}
            `}
          >
            {category}
            {active === category && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black rounded mt-1"></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCollectionFilter;
