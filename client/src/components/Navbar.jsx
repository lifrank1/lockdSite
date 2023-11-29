import React, { useState } from "react";
import CbusGoodwill from "../data/CbusGoodwill.png";
import "./NavBar.css"; // Import the CSS file
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isDonateDropdownOpen, setIsDonateDropdownOpen] = useState(false);
  const [isProgressDropdownOpen, setIsProgressDropdownOpen] = useState(false); // New state variable

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  const toggleDonateDropdown = () => {
    setIsDonateDropdownOpen(!isDonateDropdownOpen);
  };

  const toggleProgressDropdown = () => { // New function
    setIsProgressDropdownOpen(!isProgressDropdownOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <ul>
          <div className="logo">
            <img src={CbusGoodwill} alt="Goodwill Logo" />
          </div>
          <li>
            <Link to="https://www.goodwillcolumbus.org/mission/">Mission</Link>
          </li>
          <li
            onMouseEnter={toggleServicesDropdown}
            onMouseLeave={toggleServicesDropdown}
          >
            <span>Services </span>
            {isServicesDropdownOpen && (
              <div className="dropdown">
                <Link to="https://www.goodwillcolumbus.org/services/for-individuals/">
                  For Individuals
                </Link>
                <Link to="https://www.goodwillcolumbus.org/services/for-individuals/find-a-job/">
                  Find a Job
                </Link>
                <Link to="https://www.goodwillcolumbus.org/services/for-individuals/job-training/">
                  Free Job Training
                </Link>
                <Link to="https://www.goodwillcolumbus.org/services/for-individuals/residential-day-services/">
                  I/DD Services
                </Link>
                <Link to="https://www.goodwillcolumbus.org/services/for-businesses/">
                  For Business
                </Link>
              </div>
            )}
          </li>
          <li
            onMouseEnter={toggleShopDropdown}
            onMouseLeave={toggleShopDropdown}
          >
            <span>Shop</span>
            {isShopDropdownOpen && (
              <div className="dropdown">
                <Link to="https://www.goodwillcolumbus.org/shop/find-a-store/">
                  Find a Store
                </Link>
                <Link to="https://shopgoodwill.com/columbus">Shop Online</Link>
                <Link to="https://www.goodwillcolumbus.org/shop/outlet/">
                  Shop Outlet
                </Link>
                <Link to="https://www.goodwillcolumbus.org/donate/auto-auction/">
                  Buy a Vehicle
                </Link>
                <Link to="https://www.goodwillcolumbus.org/shop/art-studio-gallery/">
                  Art Studio & Gallery
                </Link>
              </div>
            )}
          </li>
          <li
            onMouseEnter={toggleDonateDropdown}
            onMouseLeave={toggleDonateDropdown}
          >
            <span>Donate</span>
            {isDonateDropdownOpen && (
              <div className="dropdown">
                <Link to="https://www.goodwillcolumbus.org/donate/clothing-and-goods/">
                  Clothing & Goods
                </Link>
                <Link to="https://www.goodwillcolumbus.org/donate/make-a-gift/">
                  Make a Gift
                </Link>
                <Link to="https://www.goodwillcolumbus.org/donate/epl/">
                  Extraordinary People Luncheon
                </Link>
                <Link to="https://www.goodwillcolumbus.org/donate/auto-auction/">
                  Donate a Vehicle
                </Link>
                <Link to="https://www.goodwillcolumbus.org/donate/goodwill-at-your-door/">
                  Goodwill At Your Door
                </Link>
                <Link to="">Volunteer</Link>
              </div>
            )}
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/SuggestionPage");
              }}
            >
              Feedback
            </a>
        </li>
        <li>
            <a
              onClick={() => {
                navigate("/ChatPage");
              }}
            >
              Chat
            </a>
            </li>
            <li>
            <span
              onMouseEnter={toggleProgressDropdown}
              onMouseLeave={toggleProgressDropdown}
            >
              Training
              {isProgressDropdownOpen && (
                <div className="dropdown">
                 <a
              onClick={() => {
                navigate("/Your-Progress" );
              }}
            >
              Your Progress
            </a>
                </div>
              )}
            </span>
            </li>
            <li>
            <Link
              to="https://www.goodwillcolumbus.org/services/for-individuals/find-a-job/"
              className="circular-button"
            >
              Find a Job
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;