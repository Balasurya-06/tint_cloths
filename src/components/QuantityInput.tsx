const QuantityInput = ({ ...props }) => {
  return (
    <input
      type="number"
      {...props}
      min="1"
      className="w-full h-11 px-4 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-white placeholder-gray-300 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      placeholder="Enter product quantity"
    />
  );
};

export default QuantityInput;
