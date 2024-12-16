import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { useSignout } from "../hooks/useSignout";

function Navbar() {
  const { userSignout } = useSignout();
  const { color, selectedProducts, totalAmount, totalPrice } =
    useContext(GlobalContext);
  return (
    <header className="bg-base-200 mb-5" style={{ backgroundColor: color }}>
      <div className=" align-elements navbar">
        <div className="navbar-start">
          <Link
            to="/"
            className="btn  btn-primary text-xl hidden md:flex"
          >
            SarvarShop
          </Link>
          <div className="dropdown md:hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-primary text-xl font-medium"
            >
              SarvarShop
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <NavbarLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal hidden md:flex ">
            <NavbarLinks />{" "}
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <div className="flex items-center">
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {totalAmount}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">{totalAmount} Items</span>
                  <span className="text-info">Subtotal: {totalPrice}</span>
                  <div className="card-actions">
                    <Link to="/cart" className="btn btn-primary btn-block">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <span onClick={userSignout}>Logout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
