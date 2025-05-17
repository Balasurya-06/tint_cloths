import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({
  dropdownTitle,
  children,
}: {
  dropdownTitle: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none transition-all duration-300 hover:bg-gray-50"
      >
        <span className="text-lg text-gray-800 font-medium">{dropdownTitle}</span>
        <span className="text-gray-600 transition-transform duration-300">
          {isOpen ? (
            <HiChevronUp className="w-5 h-5" />
          ) : (
            <HiChevronDown className="w-5 h-5" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="py-3 px-2 text-sm text-gray-700">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
