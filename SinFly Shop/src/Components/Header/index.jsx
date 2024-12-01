// Header component
// imports 
import { useContext } from "react";
import BasketContext from "../../Contexts/BasketContext";
import classes from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
// React Component 
const Header = () => {
  // variables and contexts 
  const { logo, route, counter, navContainer, subwayIcon } = classes;
  const { basket } = useContext(BasketContext);
  return (
    <>
      <nav
        className={`navbar navbar-expand-sm  navbar-light justify-content-between px-5 w-100   ${navContainer} `}
      >
        <div className="nav-item">
          <img
            src="./Icons/SinFly logo.png"
            className={`${logo}  img-fluid`}
            loading="lazy"
            alt=""
          />
        </div>
        <ul className="navbar-nav gap-5">
          <li className="nav-item position-relative ">
            <NavLink
              exact="true"
              to="/"
              activeclassname={`active-link`}
              className={`text-decoration-none ${route}`}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              activeclassname={`active-link`}
              to="/Destinations"
              className={`text-decoration-none ${route}`}
            >
              Destinations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              activeclassname={`active-link`}
              to="/ContactUs"
              className={`text-decoration-none ${route}`}
            >
              Contact us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              activeclassname={`active-link`}
              to="/AboutUs"
              className={`text-decoration-none ${route}`}
            >
              About us
            </NavLink>
          </li>
        </ul>
        <div className="nav-item d-flex gap-3">
          <Link
            to="/Basket"
            style={{
              textDecoration: "none",
              color: "brown",
            }}
          >
            <i className={`fa fa-subway ${subwayIcon}`} aria-hidden="true"></i>
            &nbsp;
            <span className={`${counter} badge bg-secondary  rounded-pill `}>
              {basket.length}
            </span>
          </Link>
          <Link
            to="/Login"
            className="btn btn-outline-dark border border-danger  "
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
