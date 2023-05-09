import React from "react";
import { Avatar } from "@mui/material";
import "./ChannelRow.css"
import { Verified } from "@mui/icons-material";


function ChannelRow({image, channel, subs, noOfVidoes,description, verified}){
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"
            alt={channel} src= {image} />
            <div className="channelRow__text">
                <h4>
                    {channel} {verified && <Verified />}
                </h4>
                <p>
                    {subs} subscribers • {noOfVidoes} videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow;