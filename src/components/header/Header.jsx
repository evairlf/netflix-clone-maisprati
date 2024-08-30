import React, { useState } from "react";
import logo from "../../assets/logo.png";
import simplifiedlogo from "../../assets/netflix-simplified-logo.svg";
import user from "../../assets/user-netflix.jpg"
import "../header/Header.css"
import SearchBar from "../searchBar/SearchBar";

export default ({black, onSearchResponse}) => {

    const [searchOpen, setSearchOpen] = useState(false);
    
    const handleFocus = () => {
        setSearchOpen(true);
    };

    const handleBlur = (e) => {
        setTimeout(() => {
            if (!e.currentTarget.contains(document.activeElement)) {
                setSearchOpen(false);
            }
        }, 100);
    };

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img className="responsive--img" src={logo} alt="image-logo" />
                </a>
            </div>
            
            <div className="header--right">
                <div className="header--search">
                    <SearchBar 
                        onResponse={onSearchResponse}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="header--user">
                    <a href="">
                        <img src={user} alt="User" />
                    </a>
                </div>
            </div>
        </header>
    );
}