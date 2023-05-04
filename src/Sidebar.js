import React  from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { Home } from "@mui/icons-material";
import { Whatshot } from "@mui/icons-material";
import { Subscriptions } from "@mui/icons-material";
import { LibraryAdd } from "@mui/icons-material";
import { History } from "@mui/icons-material";
import { OndemandVideo } from "@mui/icons-material";
import { WatchLater } from "@mui/icons-material";
import { ThumbUpAltOutlined } from "@mui/icons-material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
function Sidebar({comp}){
    return(
    <Stack direction="row">
        <div className="sidebar">

        <SidebarRow selected Icon={Home} title ="Home" />
        <SidebarRow Icon={Whatshot} title="Trending" />
        <SidebarRow Icon= {Subscriptions} title="Subscription" />
        <hr />


        <SidebarRow Icon={History} title ="History" />
        <SidebarRow Icon={OndemandVideo} title ="Your Videos" />
        <SidebarRow Icon={LibraryAdd} title ="Library" />
        <SidebarRow Icon={WatchLater} title ="Watch Later" />
        <SidebarRow Icon={ThumbUpAltOutlined} title ="Liked Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title ="Show More" />
        <hr />
        
        
        </div>
        {comp}
        </Stack>
    )
}

export default Sidebar;