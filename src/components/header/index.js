import React from "react";
import "./index.css";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import ytLogo from "../../assets/yt-logo.png";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import {
  History,
  OndemandVideo,
  WatchLater,
  ThumbUp,
  ExpandMoreOutlined,
  YouTube,
  Theaters,
  SportsEsports,
  Settings,
  Flag,
  Help,
  Feedback,
  Home,
} from "@mui/icons-material";
import SidebarRow from "../sidebarRow/sidebarRow";
import SubscribtionRow from "./subscriptionRow/SubscribtionRow";
export default function Header() {
  const toggleSidebar = () => {
    const sidebar = document.querySelector("aside");
    const miniSidebar = document.querySelector(".mini_sidebar");

    if (sidebar) {
      sidebar.classList.toggle("active");
    }
    if (miniSidebar) {
      miniSidebar.classList.toggle("active");
    }
  };

  return (
    <div className="parent_header">
      <header className="header">
        <div className="left-header">
          <div onClick={toggleSidebar}>
            <MenuIcon />
          </div>
          <img className="header__logo" src={ytLogo} alt="youtube logo" />
        </div>
        <div className="header-input">
          <div className="middle-header">
            <input className="searchInput" placeholder="search" type="text" />
            <SearchIcon className="header_searchBtn" />
          </div>
          <MicIcon className="header__icons" />
        </div>
        <div className="right-header">
          <VideoCallIcon className="header__icons" />
          <AppsIcon className="header__icons" />
          <NotificationsIcon className="header__icons" />
          <AccountCircleIcon />
        </div>
      </header>
      <aside>
        <SidebarRow icon={Home} title="Home" />
        <SidebarRow icon={ExploreIcon} title="Explore" />
        <SidebarRow icon={SubscriptionsIcon} title="Subscription" />
        <hr></hr>
        <SidebarRow icon={VideoLibraryIcon} title="Library" />
        <SidebarRow icon={History} title="History" />
        <SidebarRow icon={OndemandVideo} title="Your Videos" />
        <SidebarRow icon={WatchLater} title="Watch Later" />
        <SidebarRow icon={ThumbUp} title="Liked Videos" />
        <SidebarRow icon={ExpandMoreOutlined} title="Show More" />
        <hr></hr>
        <h4 className="sidebar_heading">SUBSCRIPTIONS</h4>

        <SubscribtionRow
          img="https://i.pinimg.com/736x/37/6d/3b/376d3b1d193dc1a9f43fb52e217a1d28.jpg"
          name="Raka Zone"
        />
        <SubscribtionRow
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOd_Rr3cpI2M_rN6tGcb87hY92Ns_6WKUzwYDPLoz8lMrVqL-gLPYq9he7GcLd06KPSI&usqp=CAU"
          name="keven-Gamer"
        />
        <SidebarRow icon={ExpandMoreOutlined} title="Show More" />
        <hr></hr>
        <h4 className="sidebar_heading">More On Youtube</h4>
        <SidebarRow icon={YouTube} title="Youtube Premium" />
        <SidebarRow icon={Theaters} title="Movies" />
        <SidebarRow icon={SportsEsports} title="Gaming" />
        <hr />
        <SidebarRow icon={Settings} title="Settings" />
        <SidebarRow icon={Flag} title="Report History" />
        <SidebarRow icon={Help} title="Help" />
        <SidebarRow icon={Feedback} title="Send Feedback" />
        <hr></hr>
        <div className="footer">
          <p>About &nbsp; Press &nbsp; Copywrite</p>
          <p>Contact us &nbsp; Creators </p>
          <p>Advertise &nbsp; Developers</p>
          <br />
          <p>
            Terms &nbsp; Privacy &nbsp; <br /> Police & Safety
          </p>
          <p>How Youtube Works</p>
          <p>Test New Features</p>
        </div>
      </aside>
      <div className="mini_sidebar">
        <div className="mini_div">
          <Home />
          <p>Home</p>
        </div>
        <div className="mini_div">
          <ExploreIcon />
          <p>Explore</p>
        </div>
        <div className="mini_div">
          <SubscriptionsIcon />
          <p>Subscription</p>
        </div>
        <div className="mini_div">
          <VideoLibraryIcon />
          <p>Video Library</p>
        </div>
      </div>
    </div>
  );
}
