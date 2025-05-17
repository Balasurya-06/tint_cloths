import {
  HiCheck as CheckIcon,
  HiXMark as XMarkIcon,
  HiQuestionMarkCircle as QuestionMarkCircleIcon,
} from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import {
  removeProductFromTheCart,
  updateProductQuantity,
} from "../features/cart/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const { productsInCart, subtotal } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white mx-auto max-w-screen-2xl px-5 max-[400px]:px-3">
      <div className="pb-24 pt-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
          Your Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {productsInCart.map((product) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={`/src/assets/${product.image}`}
                      alt={product.title}
                      className="h-24 w-24 object-cover object-center sm:h-48 sm:w-48 rounded-md shadow-md"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-lg font-semibold">
                            <Link
                              to={`/product/${product.id}`}
                              className="text-gray-800 hover:text-primary-600"
                            >
                              {product.title}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-2 flex text-sm text-gray-500">
                          <p>{product.color}</p>
                          {product.size && (
                            <p className="ml-4 border-l pl-4">{product.size}</p>
                          )}
                        </div>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          ${product.price}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9 flex items-center space-x-4">
                        <label htmlFor="quantity" className="text-sm font-medium">
                          Quantity:
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          className="w-16 h-8 bg-white border border-gray-300 rounded-md px-2"
                          value={product?.quantity}
                          onChange={(e) => {
                            dispatch(
                              updateProductQuantity({
                                id: product?.id,
                                quantity: parseInt(e.target.value),
                              })
                            );
                          }}
                        />

                        <button
                          type="button"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => {
                            dispatch(
                              removeProductFromTheCart({ id: product?.id })
                            );
                            toast.error("Product removed from the cart");
                          }}
                        >
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product?.stock ? (
                        <CheckIcon
                          className="h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <XMarkIcon
                          className="h-5 w-5 text-red-600"
                          aria-hidden="true"
                        />
                      )}
                      <span>{product?.stock ? "In stock" : "Out of stock"}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 rounded-lg shadow-lg"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900 mb-6"
            >
              Order Summary
            </h2>

            <dl className="space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${subtotal}
                </dd>
              </div>

              <div className="flex items-center justify-between border-t pt-4 border-gray-200">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5 text-primary-500"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${subtotal === 0 ? 0 : 5.0}
                </dd>
              </div>

              <div className="flex items-center justify-between border-t pt-4 border-gray-200">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how tax is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5 text-primary-500"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${subtotal / 5}
                </dd>
              </div>

              <div className="flex items-center justify-between border-t pt-4 border-gray-200">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ${subtotal === 0 ? 0 : subtotal + subtotal / 5 + 5}
                </dd>
              </div>
            </dl>

            {productsInCart.length > 0 && (
              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="w-full bg-primary-600 text-white text-xl font-semibold text-center py-3 rounded-lg shadow-md hover:bg-primary-700 transition-colors duration-300"
                >
                  Checkout
                </Link>
              </div>
            )}
          </section>
        </form>
      </div>
    </div>
  );
};

export default Cart;
