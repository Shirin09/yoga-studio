import React, { useContext, useState } from "react";
import "./Header.css";
import history from "../../helpers/history";

import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { productsContext } from "../../context/ProductContext";
import { useParams } from "react-router";

const NavBar = () => {
  const {
    handleLogout,
    user: { email },
    admin,
  } = useAuth();
  let params = useParams();

  const { getClasses } = useContext(productsContext);

  const [cardValue, setCardValue] = useState("");

  function handleValue(e) {
    const search = new URLSearchParams(history.location.params);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setCardValue(e.target.value);
    getClasses(search.toString());
  }

  return (
    <div className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to="/">
          <a href="index.html" className="navbar-brand">
            Y<span>oo</span>ga
          </a>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto">
            {admin && (
              <Link to="/odmen">
                <a href="#" className="nav-item nav-link">
                  ADMIN
                </a>
              </Link>
            )}

            <Link to="/">
              <a href="#" className="nav-item nav-link ">
                Home
              </a>
            </Link>

            <Link to="/classes">
              <a href="" className="nav-item nav-link">
                Classes
              </a>
            </Link>

            <Link to="/fav">
              <a href="" className="nav-item nav-link">
                <i className="fa fa-heart"></i>
              </a>
            </Link>
            <Link to="/contacts">
              <a href="" className="nav-item nav-link">
                Contact
              </a>
            </Link>
            <div className="nav-item dropdown">
              <input
                type="text"
                placeholder="Search..."
                className="dropdown-item "
                onChange={handleValue}
              />
            </div>

            {email ? (
              <Link to="/auth">
                <a onClick={handleLogout} className=" nav-item nav-link">
                  Logout
                </a>
              </Link>
            ) : null}

            {email ? null : (
              <Link to="/auth">
                <a onClick={handleLogout} className=" nav-item nav-link">
                  Login
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
