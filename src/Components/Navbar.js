import "../Style-sheets/Navbar.css";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useState } from "react";

export const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  const HandleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <nav>
        <div className="navbar-logo">
          <a href="#home" className="navbar-link">
            <span>🌵</span>
            <h1>GrowPlant</h1>
          </a>
        </div>

        <div className="navbar-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="navbar-icons">
          {showForm && (
            <form id="input-search">
              <input
                type="search"
                id="input-search"
                className="input-navbar-search"
                placeholder="Search products"
              />
            </form>
          )}
          <button className="navbar-icons-btns" onClick={HandleClick}>
            <SearchSharpIcon />
          </button>
          <button className="navbar-icons-btns">
            <LocalGroceryStoreOutlinedIcon />
          </button>
          <button className="navbar-icons-btns">
            <Person2OutlinedIcon />
          </button>
        </div>
      </nav>
    </>
  );
};
