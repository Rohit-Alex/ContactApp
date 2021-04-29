import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.css";

import { useHistory } from "react-router";
const List = ({ item, deleteitem, setEditItem }) => {
  let history = useHistory();
  return (
    <div className="fullWrap">
      <div className="listWrapper">
        <div className="dp">
          <AccountCircleIcon style={{ fontSize: "2.5rem" }} />
        </div>
        <div className="details">
          <div className="detail">
            <h4>{item?.firstName}</h4>
            &nbsp;&nbsp;
            <h4>{item?.LastName}</h4>
          </div>
          <div className="number">
            <h4>{item?.mobile}</h4>
          </div>
        </div>

        <div className="btn">
          <div className="delete" onClick={() => deleteitem(item.id)}>
            <DeleteIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
          <div
            className="edit"
            onClick={() => {
              setEditItem(item);
              history.push("/form");
            }}
          >
            <EditIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
