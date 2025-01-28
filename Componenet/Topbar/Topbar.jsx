import "./Topbar.css";
import { BiSearch, BiMessage, BiNotification, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Topbar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer container">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Lamasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <BiSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BiUser />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BiMessage />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <BiNotification />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile`}>
          {/* <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          /> */}
        </Link>
      </div>
    </div>
  );
};
