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
            
            <Menu />
            <img 
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="" />

            <input type="text" />
            <Search />
            <VideoCall />
            <Apps />
            <Notifications />
            <Avatar img/>
        </div>
    );
}

export default Header;