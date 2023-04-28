import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
export default function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img src="/logo.png" alt="" className="header__logo" />
            </Link>
            <div className="header__search">
                <input
                    placeholder="Search Amazon.in"
                    type="text"
                    className="header__searchInput"
                />
                <SearchIcon className="searchIcon" />
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__span1">hello Sir</span>
                        <span className="header__span2">SignIn</span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__span1">Return</span>
                        <span className="header__span2">& Order</span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__span1">Your</span>
                        <span className="header__span2">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="cart">
                    <ShoppingBasketIcon className="ShoppingBasketIcon" />
                    <span className="totalItems">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}
