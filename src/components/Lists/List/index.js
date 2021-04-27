import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./style.css";

import { useHistory } from "react-router";
const List = ({ item, deleteitem, setEditItem }) => {
  let history = useHistory();
  return (
    <div className="fullWrap">
      <div className="listWrapper">
        <div className="dp">
          <AccountCircleIcon />
        </div>
        <div className="details">
          <div className="detail">
            <h4>{item.firstName}</h4>
            <h4>{item.LastName}</h4>
          </div>
          <div className="number">
            <h4>{item.mobile}</h4>
          </div>
        </div>

        <div className="btn">
          <button className="delete" onClick={() => deleteitem(item.id)}>
            delete
          </button>
          <button
            className="edit"
            onClick={() => {
              setEditItem(item);
              history.push("/edit");
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
