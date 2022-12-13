import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/userAction";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const { currentUser } = userState;
  return (
    <div className="header">
      <header className="navbar navbar-expand-md navbar-light bg-light px-3 shadow bg-white">
        <Link style={{ textDecoration: "none" }} to="/">
          <span className="navbar-text">FireCommerce</span>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
        >
          <span className="navbar-toggler-icon">
            <FaBars size={25} color="white" />
          </span>
        </button>
        <nav className="collapse navbar-collapse navbar" id="navbar-content">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown mt-2 mx-2">
                <Link
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {currentUser.name}
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link className="dropdown-item" to="/orders">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={() => {
                        dispatch(logoutAction());
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart {cartState.cartItems.length}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
