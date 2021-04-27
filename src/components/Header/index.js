import React from "react";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import "./style.css";
import { useHistory } from "react-router";
const Header = () => {
  let history = useHistory();
  return (
    <div className="wrapper">
      <div className="headerWrapper">
        <h1>Contact</h1>
        <PermContactCalendarIcon
          style={{ fontSize: "3.5rem", paddingLeft: "1.2rem" }}
        />
      </div>
      <div className="addIconWrapper">
        <GroupAddIcon
          style={{ fontSize: "2.5rem" }}
          onClick={() => history.push("/form")}
        />
      </div>
    </div>
  );
};

export default Header;
