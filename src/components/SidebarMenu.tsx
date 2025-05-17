import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { setLoginStatus } from "../features/auth/authSlice";
import { store } from "../store";

const SidebarMenu = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (prev: boolean) => void;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { loginStatus } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const logout = () => {
    toast.success("Logged out successfully");
    localStorage.removeItem("user");
    store.dispatch(setLoginStatus(false));
    navigate("/login");
  };

  useEffect(() => {
    if (isSidebarOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isSidebarOpen]);

  return (
    <>
      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Sidebar */}
      {(isSidebarOpen || isAnimating) && (
        <div
          className={`fixed top-0 left-0 w-72 h-full z-50 transition-transform duration-300 ease-in-out transform
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            bg-[#111827] border-r border-gray-700 shadow-2xl`}
        >
          {/* Close icon */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close sidebar"
              className="text-gray-400 hover:text-white transition"
            >
              <HiXMark className="text-3xl" />
            </button>
          </div>

          {/* Brand Title */}
          <div className="text-center mb-6">
            <Link
              to="/"
              onClick={() => setIsSidebarOpen(false)}
              className="text-3xl font-bold text-white tracking-wider"
            >
              Tint
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 px-5 text-base font-medium">
            <Link
              to="/"
              onClick={() => setIsSidebarOpen(false)}
              className="py-3 px-2 rounded hover:bg-gray-800 text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsSidebarOpen(false)}
              className="py-3 px-2 rounded hover:bg-gray-800 text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>
            <Link
              to="/search"
              onClick={() => setIsSidebarOpen(false)}
              className="py-3 px-2 rounded hover:bg-gray-800 text-gray-200 hover:text-white transition"
            >
              Search
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsSidebarOpen(false)}
              className="py-3 px-2 rounded hover:bg-gray-800 text-gray-200 hover:text-white transition"
            >
              Cart
            </Link>

            {loginStatus ? (
              <button
                onClick={() => {
                  logout();
                  setIsSidebarOpen(false);
                }}
                className="py-3 px-2 rounded hover:bg-red-600 text-red-400 hover:text-white transition text-left"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsSidebarOpen(false)}
                  className="py-3 px-2 rounded hover:bg-gray-800 text-gray-200 hover:text-white transition"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsSidebarOpen(false)}
                  className="py-3 px-2 rounded hover:bg-gray-800 text-gray-200 hover:text-white transition"
                >
                  Sign up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default SidebarMenu;
