import React from "react";
import live from "../../../assets/LiveLogo.png";
import "./index.css";

export default function SubscribtionRow(props) {
  return (
    <div className="subscriptionRow">
      <div className="left">
        <img className="channelLogo" src={props.img} alt="channel logo" />
        <p className="channelName">{props.name}</p>
      </div>
      <div className="right">
        <img className="liveImg" src={live} alt="live" />
      </div>
    </div>
  );
}
