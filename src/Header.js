import React from "react";
import './Header.css'
import { Menu } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { VideoCall } from "@mui/icons-material";
import { Apps } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import { Avatar } from "@mui/material";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Menu />
                <img     
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                alt="" 
                />
            </div>

            <div className="header__input">
                <input placeholder = "Search" type="text" />
                <Search className="header__inputButton"/>
            </div>
            
            <div className="header__icons">
                <VideoCall className="header__icon"/>
                <Apps className="header__icon"/>
                <Notifications className="header__icon"/>
                <Avatar img="image.jpeg"/>
            </div>
            
        </div>
    );
}

export default Header;