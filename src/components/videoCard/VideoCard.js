import React from "react";
import "./index.css";

import { MoreVert, PlaylistAdd, WatchLater } from "@mui/icons-material";
import { Avatar } from "@mui/material";
export default function VideoCard(props) {
  return (
    <div className="videoCard">
      <div className="watchLater">
        <WatchLater className="VideoIcon" />
      </div>
      <div className="playListAdd">
        <PlaylistAdd className="VideoIcon" />
      </div>
      <img className="videoImg" src={props.thumbnail} alt="" />
      <div className="duration">{props.duration}</div>
      <div className="videoData">
        <Avatar src={props.channelLogo} />
        <div className="channelDetails">
          <h5>{props.title}</h5>
          <p className="name">{props.channelName}</p>
          <p className="">
            {props.views} &bull; {props.time}
          </p>
        </div>
        <MoreVert className="moreIcon" />
      </div>
    </div>
  );
}
