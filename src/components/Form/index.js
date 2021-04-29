import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import "./style.css";

const FormEditing = ({ data, setData, item, user, setUser }) => {
  let history = useHistory();

  useEffect(() => {
    if (Object.keys(item).length !== 0) {
      setUser(item);
    }
  }, []);

  const [error, setError] = useState({ firstName: "", mobile: "", email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    console.log("hello", Object.keys(item).length);

    if (user.firstName == "") {
      flag = false;
    }
    if (user.email != "" && user.email.indexOf("@") === -1) {
      setError({ ...error, email: "** Enter a valid email **" });
      flag = false;
    }

    if (user.mobile.length != 10) {
      setError({ ...error, mobile: "** Enter a valid mobile number **" });
      flag = false;
    }

    if (flag) {
      if (Object.keys(item).length !== 0) {
        const updatedData = [...data].map((info) => {
          if (info === item) {
            console.log(info);
            info = { ...user };
          }
          return info;
        });
        setData(updatedData);
        setUser("");
        history.push("/");
      } else {
        console.log("uni", user);
        const uniqueUser = { ...user, id: new Date().getTime() };
        setData([...data, uniqueUser]);
        history.push("/");
      }
    }
  };
  return (
    <div className="full">
      <div className="AddWrapper">
        <div className="dp">
          <AccountCircleIcon style={{ fontSize: "3rem" }} />{" "}
        </div>
        <div className="formWrapper">
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName"> First Name : </label>
            <input
              type="text"
              id="firstName"
              defaultValue={item.firstName}
              onChange={handleChange}
              required
            />
            <div className="error" style={{ color: "red" }}>
              {error.firstName}
            </div>
            <br />
            <label htmlFor="LastName"> Last Name : </label>
            <input
              type="text"
              id="LastName"
              defaultValue={item.LastName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="email"> Email : </label>
            <input
              type="text"
              id="email"
              defaultValue={item.email}
              onChange={handleChange}
            />
            <div>{error.email}</div>
            <br />
            <label htmlFor="mobile">Mobile :</label>
            <input
              type="number"
              id="mobile"
              defaultValue={item.mobile}
              onChange={handleChange}
              required
            />
            <div className="error" style={{ color: "red" }}>
              {error.mobile}
            </div>
            <input className="submitBtn" type="submit" defaultValue="Update" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditing;
